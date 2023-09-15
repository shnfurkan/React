import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  movies: [],
  searchMovies: "",
}
export const MovieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    addMovies: (state,actions) => {
      state.movies = actions.payload;
    },
    deletingMovies: (state,actions) => {
      const deletedMovies = state.movies.filter((value)=> {
        return value.id !== actions.payload
      })
      state.movies = deletedMovies;
    },
    searchChange: (state,actions) => {
    state.searchMovies = actions.payload
    }
  },
})

export const {addMovies,deletingMovies,searchChange} = MovieSlice.actions

export default MovieSlice.reducer

