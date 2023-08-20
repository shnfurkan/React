import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'

const store = configureStore({
  reducer: {
    hesaplama: counterReducer,
  },
})

export default store;

