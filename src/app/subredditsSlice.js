import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    subreddits: [],
    isLoading: false,
    hasError: false
}

export const fetchSubreddits = createAsyncThunk(
    'subreddits/fetchSubreddits',
    async () => {
        const response = await fetch('https://www.reddit.com/subreddits.json')
        const json = await response.json()
        console.log(json)
        return json
    }
)

const subredditsSlice = createSlice({
    name: 'subreddits',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSubreddits.pending, (state, action) => {

            })
            .addCase(fetchSubreddits.fulfilled, (state, action) => {
                
            })
            .addCase(fetchSubreddits.rejected, (state, action) => {
                
            })
    }
})

