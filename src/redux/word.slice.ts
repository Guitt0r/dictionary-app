import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {RootState} from "./store.ts";
import {WordType} from "../types/types.ts";

interface WordState {
    words: WordType[],
}

const initialState: WordState = {
    words: [
        {
            original:'Book',
            translation:'Книжка'
        },
        {
            original:'Dog',
            translation:'Собака'
        },
        {
            original:'Cat',
            translation:'Кішка'
        },
        {
            original:'Hand',
            translation:'Рука'
        },
        {
            original:'Leg',
            translation:'Нога'
        },
    ],
}

export const wordSlice = createSlice({
    name: 'word',
    initialState,
    reducers: {
        addWord: (state, action: PayloadAction<WordType>) => {
            state.words.push(action.payload)
        },
    },
})

export const {addWord} = wordSlice.actions

export const selectWords = (state: RootState) => state.word.words
export default wordSlice.reducer