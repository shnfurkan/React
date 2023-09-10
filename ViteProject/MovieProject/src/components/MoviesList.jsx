import { useSelector,useDispatch } from 'react-redux'
import Rating from '@mui/material/Rating';
import "../styles/MoviesList.css"
import {deletingMovies,searchChange} from "../slices/MovieSlice"
import { useEffect,useState } from 'react';
import axios from "axios";
import "../App.css"

function MoviesList() {
    // const moviesData = useSelector((state) => state.movie.movies)
    const dispatch = useDispatch()
    // const {courses} = useSelector(({form,movie:{movies,searchMovies}}) => {
    //     const filteredCourses = tasks.filter((course)=> course.movieName.toLowerCase().includes(searchMovies.toLowerCase()))
    //     return {
    //         courses:filteredCourses
    //     }
    // })

    // const {searchMovies} = useSelector((state) => state.movie.searchMovies)

    const [tasks, setTasks] = useState([]);
    const [filteredTasks, setFilteredTasks] = useState([]);
    const [searchMovies, setSearchMovies] = useState("");

    const fetchTasks = async () => {
        const response = await axios.get('http://localhost:3000/data');
        setTasks(response.data);
      }
      useEffect(() => {
        fetchTasks();
      },[]);

      useEffect(() => {
        if (searchMovies) {
          const filtered = tasks.filter((task) => task.movieName.toLowerCase().includes(searchMovies.toLowerCase()));
          setFilteredTasks(filtered);
        } else {
          setFilteredTasks(tasks);
        }
      }, [searchMovies, tasks])

    return (
        <>
        <div className='containerSearch'>
        <div className='search-group'>
            <label className='search'>Search:</label>
            <input className='input' value={searchMovies} onChange={(event) => setSearchMovies(event.target.value)} />
        </div>
        </div>

        <div className='container'>
            {
                filteredTasks.map((value,index)=> {
                    return (
                        <div key={index} className='moviesList'>
                            <h3>Movie Name:</h3>
                            {value.movieName}
                            <h3>Movie Type:</h3>
                            {value.movieType}
                            <h3>Movie Year:</h3>
                            {value.movieYear}
                            <h3>Movie Point:</h3>
                            <Rating name="customized-10" defaultValue={parseInt(value.moviePoint)} max={10}/>
                    <button className='deleteMovie' onClick={ async () => 
                        // dispatch(deletingMovies(value.id))}
                        {
                                await axios.delete(`http://localhost:3000/data/${value.id}`)
                                const afterDeletingTasks = tasks.filter((task)=> {
                                  return task.id !==value.id;
                                })
                                setTasks(afterDeletingTasks);
                        }
                    }
                        >Delete a Movie</button>
                        </div>
                    )
                })
            }
        </div>
        </>
    );
}
export default MoviesList;

