import { createSlice, nanoid } from '@reduxjs/toolkit'

export const courseSlice = createSlice({
    name: 'course',
    initialState: {
        data: []
    },
    reducers: {
      add: (state,action) => {
        state.data.push ({
            baslik: action.payload.baslik,
            aciklama: action.payload.aciklama,
            fiyat: action.payload.fiyat,
            id: nanoid(),
        })
      },
      deleting: (state,action) => {
        const afterDeleting = state.data.filter((task) => {
            return task.id !== action.payload;
            })
        state.data = afterDeleting
      } 
    },
})

export const {add,deleting} = courseSlice.actions
export default courseSlice.reducer

