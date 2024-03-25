import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    post: [],
    isLoading : false,
    hasError : false,
}

export const fetchPost = createAsyncThunk(
    'reddit/fetchPost',
    async (uri, thunkAPI) => {
        try {
            const response = await fetch('https://www.reddit.com/r/popular.json')
            const json = await response.json()
            return json
        } catch (e) {
            throw new Error("Unable to fetch data from uri.")
        }
    }
)

const redditSlice = createSlice({
    name: 'reddit',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchPost.pending, (state, action) => {
            state.isLoading = true
            state.hasError = false
        })
        .addCase(fetchPost.fulfilled, (state, action) => {
            state.isLoading = false
            state.hasError = false
            state.post = action.payload.data.children.map((item) => {
                let imageUrl = null
                if(item.data.thumbnail) {
                    imageUrl = item.data.thumbnail
                } 
                return {
                    title : item.data.title,
                    imageUrl : imageUrl,
                    selftext : item.data.selftext,
                    author : item.data.author,
                    comments : item.data.num_comments,
                    votes : item.data.ups
                }
            })
        })
        .addCase(fetchPost.rejected, (state, action) => {
            state.isLoading = false
            state.hasError = true
        })
    }
})

export default redditSlice.reducer