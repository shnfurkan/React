import {Route,Routes} from "react-router-dom"
import HomePage from "./components/HomePage"
import Error from "./components/Error"
import Navbar from "./components/Navbar"
import AddMovies from "./components/AddMovies"
import MoviesList from "./components/MoviesList"
import AboutUs from "./components/AboutUs"
import Footer from "./components/Footer"
import { useDispatch } from 'react-redux'
import { useEffect } from "react"
import { gettedMoviesActions } from "./Api"

function App() {
  
  const dispatch = useDispatch()

    useEffect(() => {
      dispatch(gettedMoviesActions());
    },[]);

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
