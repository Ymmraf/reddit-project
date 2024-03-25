import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    subreddits: [],
    isLoading: false,
    hasError: false,
    selected: ''
}

export const fetchSubreddits = createAsyncThunk(
    'subreddits/fetchSubreddits',
    async () => {
        const response = await fetch('https://www.reddit.com/subreddits.json')
        const json = await response.json()
        return json
    }
)

const subredditsSlice = createSlice({
    name: 'subreddits',
    initialState,
    reducers: {
        setSelectedSubreddits: (state, action) => {
            state.selected = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSubreddits.pending, (state) => {
                state.isLoading = true
                state.hasError = false
            })
            .addCase(fetchSubreddits.fulfilled, (state, action) => {
                state.isLoading = false
                state.hasError = false
                state.subreddits = action.payload.data.children.map((item) => {
                    const url = `${item.data.url.slice(1)}.json`
                    return {
                        title: item.data.display_name_prefixed,
                        url: url,
                    }
                })
            })
            .addCase(fetchSubreddits.rejected, (state) => {
                state.isLoading = false
                state.hasError = true
            })
    }
})

export const { setSelectedSubreddits } = subredditsSlice.actions
export default subredditsSlice.reducer