import { createSlice,nanoid } from '@reduxjs/toolkit'

const initialState = {
  data: [],
  search: "",
}

export const CourseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    addData: (state,actions) => {
        state.data.push ({
            title: actions.payload.title,
            definition: actions.payload.definition,
            cost: actions.payload.cost,
            id:nanoid()
        })
    },
    deletingData: (state,actions) => {
        const deletedData = state.data.filter((value)=> {
            return value.id !== actions.payload
        })
        state.data = deletedData;
    },
    searchChange: (state,actions) => {
        state.search = actions.payload
    }
  },
})

export const {addData,deletingData,searchChange} = CourseSlice.actions

export default CourseSlice.reducer
