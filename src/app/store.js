import { configureStore } from '@reduxjs/toolkit'
import redditSlice from './redditSlice'

export default configureStore({
  reducer: {
    reddit: redditSlice
  }
})