import {Route,Routes} from "react-router-dom"
import HomePage from "./components/HomePage"
import Error from "./components/Error"
import Navbar from "./components/Navbar"
import AddMovies from "./components/AddMovies"
import MoviesList from "./components/MoviesList"
import AboutUs from "./components/AboutUs"
import Footer from "./components/Footer"
import axios from "axios"
import { useSelector, useDispatch } from 'react-redux'
import { addMovies } from "../src/slices/MovieSlice"
import { useEffect } from "react"


function App() {

  const moviesData = useSelector((state) => state.movie.movies)
  const dispatch = useDispatch()

  const fetchTasks = async () => {
    const response = await axios.get('http://localhost:3000/data');
    dispatch(addMovies(response.data));
    }
    useEffect(() => {
    fetchTasks();
    },[moviesData]);

  return (
   <div>
      <Routes>
          <Route path="/" element={<HomeWithNavbarAndFooter/>}/>
          <Route path="/add-movies" element={<AddMoviesWithNavbarAndFooter/>}/>
          <Route path="/movies" element={<MoviesListWithNavbarAndFooter/>}/>
          <Route path="/about-us" element={<AboutUsWithNavbarAndFooter/>}/>
          <Route path="*" element={<Error/>}/>
      </Routes>
   </div>
  )
}

function HomeWithNavbarAndFooter() {
  return (
    <>
      <Navbar />
      <HomePage />
      <Footer />
    </>
  );
}

function AddMoviesWithNavbarAndFooter() {
  return (
    <>
      <Navbar />
      <AddMovies />
      <Footer />
    </>
  );
}

function MoviesListWithNavbarAndFooter() {
  return (
    <>
      <Navbar />
      <MoviesList />
      <Footer />
    </>
  );
}

function AboutUsWithNavbarAndFooter() {
  return (
    <>
      <Navbar />
      <AboutUs />
      <Footer />
    </>
  );
}

export default App
