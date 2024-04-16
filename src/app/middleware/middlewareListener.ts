import { moveIssue } from "@/features/issues/issueSlice"

import { createListenerMiddleware } from "@reduxjs/toolkit"
import { AppDispatch, RootState } from "../store"
import { fetchIssues } from "@/features/issues/issueThunks"
import { handleFetchIssues, handleMoveIssue } from "./lib"


export const listenerMiddleware = createListenerMiddleware()

listenerMiddleware.startListening.withTypes<RootState, AppDispatch>()({
    actionCreator: moveIssue,
    effect: handleMoveIssue,
})

listenerMiddleware.startListening.withTypes<RootState, AppDispatch>()({
    actionCreator: fetchIssues.fulfilled,
    effect: handleFetchIssues,

})