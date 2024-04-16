import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Issue } from './types';
import { DropResult } from 'react-beautiful-dnd';
import { ColumnKey } from '@/utils/localStorage';
import { fetchIssues } from './issueThunks';


type IssuesState = Record<ColumnKey, Issue[]> & {
  loading: boolean,
  error?: string
}

const initialState: IssuesState = {
  todo: [],
  inProgress: [],
  done: [],
  loading: false,
  error: undefined
};

const issuesSlice = createSlice({
  name: 'issues',
  initialState,
  reducers: {
    moveIssue: (state, action: PayloadAction<DropResult>) => {
      const { source, destination } = action.payload;
      if (!destination) return;

      const sourceIssues = state[source.droppableId as ColumnKey];
      const [removed] = sourceIssues.splice(source.index, 1);

      const destinationIssues = state[destination.droppableId as ColumnKey];
      destinationIssues.splice(destination.index, 0, removed);
    },
    setIssues: (state, action: PayloadAction<Record<ColumnKey, Issue[]>>) => {
      const { todo, inProgress, done } = action.payload
      state.todo = [...todo];
      state.inProgress = [...inProgress],
        state.done = [...done];
    }
  },
  extraReducers: (builder) => {
      builder.addCase(fetchIssues.pending, (state) => {
        state.loading = true;
        state.error = undefined;
    })
    .addCase(fetchIssues.fulfilled, (state) => {
        state.loading = false;
    })
    .addCase(fetchIssues.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch issues';
    });
  },
});

export const { moveIssue, setIssues } = issuesSlice.actions;

export default issuesSlice.reducer;