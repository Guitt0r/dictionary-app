import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {RootState} from "./store.ts";
import {TestType} from "../types/types.ts";
import {createSelector} from "reselect";

interface TestState {
    tests: TestType[],
}

const initialState: TestState = {
    tests: [],
}

export const testSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        addTest: (state, action: PayloadAction<TestType>) => {
            state.tests.push(action.payload)
        },
    },
})

export const {addTest} = testSlice.actions

export const selectTests = (state: RootState) => state.test.tests
export const selectAveragePerformance = createSelector(selectTests, (tests): {
    score: number,
    questionsQty: number
} => {
    return tests.reduce((performance, test) => {
        performance.score += test.score
        performance.questionsQty += test.questions.length
        return performance
    }, {score: 0, questionsQty: 0})
})
export default testSlice.reducer