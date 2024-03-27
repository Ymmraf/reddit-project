import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    post: [],
    isLoading : false,
    hasError : false,
}

const rootUri = 'https://www.reddit.com/'

export const fetchPost = createAsyncThunk(
    'reddit/fetchPost',
    async (uri = `/r/popular.json`, thunkAPI) => {
        try {
            const response = await fetch(`${rootUri}${uri}`)
            const json = await response.json()
            // console.log(json)
            return json
        } catch (e) {
            throw new Error("Unable to fetch data from uri.")
        }
    }
)

export const getComments = createAsyncThunk(
    'reddit/getComments',
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
        console.log(comments)
        const mappedComments = comments.map(comment => {
            return {
                id: comment.data.id,
                author: comment.data.author,
                body: comment.data.body,
                ups: comment.data.ups
            }
        })
        // console.log('This is mapped comments')
        // console.log(mappedComments)
        // console.log({url, mappedComments})
        return {url, mappedComments}
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
                    votes : item.data.ups,
                    link : item.data.permalink,
                    post_comments : []
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