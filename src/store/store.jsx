import { configureStore } from "@reduxjs/toolkit";
import searchReducer  from "../features/search/searchSlice";
import favoriteReducer from "../features/favorite/favoriteSlice"
import proofReducer from "../features/proof/proofSlice"

export const store = configureStore({
    reducer:{
        search: searchReducer,
        favorite: favoriteReducer,
        proof: proofReducer
    }
})