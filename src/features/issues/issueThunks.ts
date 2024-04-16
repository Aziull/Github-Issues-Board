import { createAsyncThunk } from "@reduxjs/toolkit";
import { Issue } from "./types";
import { mapIssues } from "./lib";
import { fetchWithHandling } from "@/utils/fetchUtility";

export const fetchIssues = createAsyncThunk(
    'issues/fetchIssues',
    async (repoFullName: string, { rejectWithValue }) => {
        try {
            const data: Issue[] = await fetchWithHandling<Issue[]>(`https://api.github.com/repos/${repoFullName}/issues`);
            return mapIssues(data);
        } catch (error) {
            return rejectWithValue(error instanceof Error ? error.message : 'Unknown error occurred');
        }
    }
);