import { createSlice } from "@reduxjs/toolkit";
import React from "react";

let initialState = {
    list: []
}


let favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            if (state.list.some(item => item.id === action.payload.id)) {
                return state.list = [...state]
            } else {
                state.list.push(action.payload)
            }
        },
        removeFavorite: (state, action) => {
            state.list = state.list.filter(item => item.id !== action.payload.id)
        }
    }
})


export default favoriteSlice.reducer;
export const { addFavorite } = favoriteSlice.actions