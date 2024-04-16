import { createAsyncThunk } from "@reduxjs/toolkit";
import { RepositoryDto } from "./types";
import { mapRepositoryDetails } from "./lib";
import { fetchWithHandling } from "@/utils/fetchUtility";

export const fetchRepoDetails = createAsyncThunk(
    'repo/fetchRepoDetails',
    async (repoFullName: string, { rejectWithValue }) => {
        try {
            const data: RepositoryDto = await fetchWithHandling<RepositoryDto>(`https://api.github.com/repos/${repoFullName}`);
            return mapRepositoryDetails(data);
        } catch (error) {
            return rejectWithValue(error instanceof Error ? error.message : 'Unknown error occurred');
        }
    }
);