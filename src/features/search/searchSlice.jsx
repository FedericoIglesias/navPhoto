import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const keyApi = 'bLqeYYeljbC9yB3SKExiYy_pNN_9zFnNOKwVefVPSGs'
// yA00ILQGsJV30W_AK23iKsyl2-BUZKOn-7mkm7awCqk
// KE41pK3tLmBHw0d0LbHO2AeOWworK5A5OfSCKSDH1ZY
// 5KvLy1fiZTTTZFm5ku2w8w4Qk3mcWiN6x5wPnhoOUcg
// bLqeYYeljbC9yB3SKExiYy_pNN_9zFnNOKwVefVPSGs
let initialState = {
    list: []
}

export let searchPhoto = createAsyncThunk('search/searchPhoto', async (arg, thunlApi) => {
    try {
        console.log('soy el search ' + arg.page)
            const response = await fetch(`https://api.unsplash.com/photos?client_id=${keyApi}&page=${arg.page}&per_page=6`);
            const data = await response.json();
            return [...data]
        
    } catch (error) {
        alert(`${error}`)
    }
});



export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        sortSearch: (state, action) => {
            switch (action.payload) {
                case 'height':
                    state.list.sort((a, b) => { return a.height - b.height })
                    break
                case 'width':
                    state.list.sort((a, b) => { return a.width - b.width })
                    break
                case 'likes':
                    state.list.sort((a, b) => { return a.likes - b.likes })
                    break
                case 'dateAdd':
                    state.list.sort((a, b) => { return a.date - b.date })
                    break
                default:
                    state.list.sort((a, b) => { return a.id - b.id})
            }
        }
    },
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
});

export const {sortSearch} = searchSlice.actions
export default searchSlice.reducer