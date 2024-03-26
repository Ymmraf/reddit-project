import { configureStore } from '@reduxjs/toolkit'
import redditSlice from './redditSlice'
import subredditsSlice from './subredditsSlice'
import commentSlice from './commentSlice'

export default configureStore({
  reducer: {
    reddit: redditSlice,
    subreddits : subredditsSlice,
    comments : commentSlice
  }
})