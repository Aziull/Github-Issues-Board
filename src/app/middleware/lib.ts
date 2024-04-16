import { Issue } from "@/features/issues/types";
import { ColumnKey, loadIssuePositions, saveIssuePosition } from "@/utils/localStorage";
import { ListenerEffectAPI, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../store";
import { reorderIssuesByPosition } from "@/features/issues/lib";
import { setIssues } from "@/features/issues/issueSlice";
import { DropResult } from "react-beautiful-dnd";

export const handleMoveIssue = (
    action: PayloadAction<DropResult>,
    api: ListenerEffectAPI<RootState, AppDispatch>
) => {
    const { repo } = api.getState().repo;
    const { destination, source, draggableId } = action.payload;
    if (!repo || !destination || !source) return;

    saveIssuePosition({
        repoId: repo.id,
        issueId: draggableId,
        destination: {
            column: destination.droppableId as ColumnKey,
            position: destination.index,
        },
        source: {
            column: source.droppableId as ColumnKey,
            position: source.index
        }
    })
};

export const handleFetchIssues = async (
    action: PayloadAction<Record<ColumnKey, Issue[]>>,
    api: ListenerEffectAPI<RootState, AppDispatch>
) => {
    const { repo } = api.getState().repo;
    if (!repo) return;
    const all: Record<ColumnKey, Issue[]> = action.payload;

    const storage = loadIssuePositions(repo.id);
    const reordered =  reorderIssuesByPosition(all, storage);
    api.dispatch(setIssues({ ...reordered }));
};
