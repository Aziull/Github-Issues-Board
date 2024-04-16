import issueSlice from '@/features/issues/issueSlice';
import repoSlice from '@/features/repo/repoSlice';
import { configureStore } from '@reduxjs/toolkit';
import { listenerMiddleware } from './middleware/middlewareListener';

export const store = configureStore({
    reducer: {
        issues: issueSlice,
        repo: repoSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(listenerMiddleware.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
