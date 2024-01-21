import { configureStore } from '@reduxjs/toolkit'
import MenuSlice from '../slices/MenuSlice'
import thunk from 'redux-thunk';

export const store = configureStore({
  reducer: {
    menu: MenuSlice,
  },
  middleware: [thunk],
})
