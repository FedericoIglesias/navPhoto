import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const keyApi = 'yA00ILQGsJV30W_AK23iKsyl2-BUZKOn-7mkm7awCqk'
// yA00ILQGsJV30W_AK23iKsyl2-BUZKOn-7mkm7awCqk
// KE41pK3tLmBHw0d0LbHO2AeOWworK5A5OfSCKSDH1ZY
// 5KvLy1fiZTTTZFm5ku2w8w4Qk3mcWiN6x5wPnhoOUcg
let initialState = {
    list: []
}

export let searchPhoto = createAsyncThunk('search/searchPhoto', async (arg, thunkAPI) => {
    try {
        const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${keyApi}&count=8`);
        const data = await response.json();
        return [...data]
    } catch (error) {
        alert(`${error}`)
    }
});



export const searchSlice = createSlice({
    name: 'search',
    initialState,
    extraReducers: {
        [searchPhoto.pending]: (state) => {
            console.log("Loading...");
        },
        [searchPhoto.fulfilled]: (state, action) => {
            state.list = action.payload;
            console.log(state.list)
        },
        [searchPhoto.rejected]: (state) => {
            console.log("Failed fetching the data");
        }
    }
})


export default searchSlice.reducer