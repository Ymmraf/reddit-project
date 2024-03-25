import { configureStore } from '@reduxjs/toolkit'
import redditSlice from './redditSlice'
import subredditsSlice from './subredditsSlice'

export default configureStore({
  reducer: {
    reddit: redditSlice,
    subreddits : subredditsSlice
  }
})