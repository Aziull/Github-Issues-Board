import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchRepoDetails } from './repoThunks';
import { Repository } from './types';

interface State {
    repo?: Repository,
    loading: boolean,
    error?: string
}

const initialState: State = {
    repo: undefined,
    loading: false,
    error: undefined
};

const repoSlice = createSlice({
    name: 'repo',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRepoDetails.pending, (state) => {
                state.loading = true;
                state.error = undefined;
            })
            .addCase(fetchRepoDetails.fulfilled, (state, action: PayloadAction<Repository>) => {
                state.repo = { ...action.payload };
                state.loading = false;
            })
            .addCase(fetchRepoDetails.rejected, (state, action) => {
                state.loading = false;
                console.log(action);
                
                state.error = action.error.message || 'Failed to fetch repository details';
            });
    }
});

export default repoSlice.reducer;
