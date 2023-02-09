import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const keyApi = '5KvLy1fiZTTTZFm5ku2w8w4Qk3mcWiN6x5wPnhoOUcg'

let initialState = {
    list: []
}

export let   searchPhoto = createAsyncThunk( 'search/searchPhoto',  async(arg,thunkAPI) => {
    const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${keyApi}&count=3`);
    const data = await response.json();
    console.log('dentro de searchPhoto')
    return [...data]
});



export const searchSlice = createSlice({
    name: 'search',
    initialState,
    extrareducers: {
        [searchPhoto.pending]: (state) => {
            console.log("Loading...");
        },
        [searchPhoto.fulfilled]: (state, action) => {
            state.list = action.payload;
            console.log('estoy en fulfilled')
        },
        [searchPhoto.rejected]: (state) => {
            console.log("Failed fetching the data");
        }
    } 
})


export default searchSlice.reducer