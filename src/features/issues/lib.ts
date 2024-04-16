import { ColumnKey, RepoIssuesPositions } from "@/utils/localStorage";
import { Issue } from "./types";

export const mapIssues = (issuesDto: Issue[]): Record<ColumnKey, Issue[]> => {
    return {
        todo: issuesDto.filter(issue => !issue.assignee && issue.state === 'open'),
        inProgress: issuesDto.filter(issue => issue.assignee && issue.state === 'open'),
        done: issuesDto.filter(issue => issue.state === 'closed')
    };
}

export function reorderIssuesByPosition(all: Record<ColumnKey, Issue[]>, storage: RepoIssuesPositions) {
    const copy: Record<ColumnKey, Issue[]> = JSON.parse(JSON.stringify(all)) || {};

    Object.entries(storage)
        .sort((a, b) => a[1].position - b[1].position)
        .forEach(([issueId, { column, position }]) => {
            let foundIssue: Issue | undefined;
            for (const key in copy) {
                const index = copy[key as ColumnKey].findIndex(issue => Number(issue.id) === Number(issueId));
                if (index !== -1) {
                    foundIssue = copy[key as ColumnKey][index];
                    copy[key as ColumnKey].splice(index, 1);
                    break;
                }
            }

            if (foundIssue) {
                copy[column].splice(position, 0, foundIssue);
            }
        });

    return copy;
}