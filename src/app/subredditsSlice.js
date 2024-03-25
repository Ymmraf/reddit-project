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
        console.log(json.data)
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
                state.isLoading = true
                state.hasError = false
            })
            .addCase(fetchSubreddits.fulfilled, (state, action) => {
                state.isLoading = false
                state.hasError = false
                state.subreddits = action.payload.data.children.map((item) => {
                    return {
                        title: item.data.display_name_prefixed,
                        url: item.data.url
                    }
                })
            })
            .addCase(fetchSubreddits.rejected, (state, action) => {
                state.isLoading = false
                state.hasError = true
            })
    }
})

export default subredditsSlice.reducer