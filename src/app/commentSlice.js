import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    hasError: false,
    comments: {}
}

export const fetchComments = createAsyncThunk(
    'comments/fetchComments',
    async (url, thunkAPI) => {
        const response = await fetch(`https://www.reddit.com${url}.json`)
        const json = await response.json()
        const commentArr = json[1].data.children
        const comments = []
        commentArr.forEach(comment => {
            if(comment.data.author !== "[deleted]") {
                comments.push(comment)
            }
        });
        // console.log(comments)
        const mappedComments = comments.map(comment => {
            return {
                author: comment.data.author,
                body: comment.data.body,
                ups: comment.data.ups
            }
        })
        // console.log('This is mapped comments')
        // console.log(mappedComments)
        console.log({url, mappedComments})
        return {url, mappedComments}
    }
)

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchComments.pending, (state) => {
                state.isLoading = true
                state.hasError = false
            })
            .addCase(fetchComments.fulfilled, (state, action) => {
                state.isLoading = false
                state.hasError = false
                state.comments[action.payload.url] = action.payload.mappedComments
            })
            .addCase(fetchComments.rejected, (state) => {
                state.isLoading = false
                state.hasError = true
            })
            
    }
})

export default commentsSlice.reducer