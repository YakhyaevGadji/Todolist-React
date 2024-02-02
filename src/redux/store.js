import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/todoSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer
  },
})