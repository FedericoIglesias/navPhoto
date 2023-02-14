import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


let initialState = { list: []}


// client_id=${keyApi}&

export let proofPhoto = createAsyncThunk('search/searchPhoto', async (arg, thunkAPI) => {
    try {
        const response = await fetch(`https://api.unsplash.com/photos/random?count=10`);
        const data = await response.json();
        return [...data]
    } catch (error) {
        alert(`${error}`)
    }
});


export const proofSlice = createSlice({
    name: 'proof',
    initialState,
    extraReducers: {
        [proofPhoto.pending]: (state) => {
            console.log("Loading...");
        },
        [proofPhoto.fulfilled]: (state, action) => {
            state.list = action.payload;
            console.log(state.list)
        },
        [proofPhoto.rejected]: (state) => {
            console.log("Failed fetching the data");
        }
    }
})

export default proofSlice.reducer