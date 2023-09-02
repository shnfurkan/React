import { useSelector, useDispatch } from 'react-redux'
import {nameChange, yearChange, typeChange, pointChange,updatePhoto} from "../slices/FormSlice"
import {addMovies} from "../slices/MovieSlice"
import "../styles/AddMovies.css"
import { useFormik } from 'formik';
import { basicSchema } from '../schemas';
import { useState } from 'react';

function AddMovies() {

    const [selectedFile, setSelectedFile] = useState(null);

    const dispatch = useDispatch()
    const {movieName,movieYear,movieType,moviePoint} = useSelector((state) => state.form)

    // const handleClick = (event) => {
    //     event.preventDefault();
    //     dispatch(addMovies({movieName,movieYear,movieType,moviePoint}));
    //     dispatch(nameChange(""));
    //     dispatch(yearChange(""));
    //     dispatch(typeChange(""));
    //     dispatch(pointChange(""));
    // }

    const formik = useFormik({
        initialValues: {
          movieName: movieName,
          movieType: movieType,
          movieYear: movieYear,
          moviePoint: moviePoint,
          movieImage: null,
        },
        validationSchema: basicSchema,
        // handleClick

        onSubmit: (values) => {
            
            // dispatch(nameChange(""));
            // dispatch(yearChange(""));
            // dispatch(typeChange(""));
            // dispatch(pointChange(""));

        if (selectedFile) {
            dispatch(updatePhoto(selectedFile));
        }

        const movieData = {
            movieName: values.movieName,
            movieType: values.movieType,
            movieYear: values.movieYear,
            moviePoint: values.moviePoint,
            movieImage: selectedFile,
          };

        dispatch(addMovies(movieData));
        formik.resetForm();
        }
});

    return (  
        <div className='addMovies'>
            <form onSubmit={formik.handleSubmit}>
                <h1>Do you want to add movie?</h1>
                <div>
                <label>Movie Name:</label>
                <input onChange={formik.handleChange} value={formik.values.movieName} type='text' name='movieName'/>
                {formik.errors.movieName && <p className='erroring'>{formik.errors.movieName}</p>}
                </div>
                <div>
                <label>Movie Type:</label>
                <input onChange={formik.handleChange} value={formik.values.movieType} type='text' name='movieType'/>
                {formik.errors.movieType && <p className='erroring'>{formik.errors.movieType}</p>}
                </div>
                <div>
                <label>Movie Year:</label>
                <input onChange={formik.handleChange} value={formik.values.movieYear} type='number' name='movieYear'/>
                {formik.errors.movieYear && <p className='erroring'>{formik.errors.movieYear}</p>}
                </div>
                <div>
                <label>Movie Point:</label>
                <input onChange={formik.handleChange} value={formik.values.moviePoint} type='number' name='moviePoint'/>
                {formik.errors.moviePoint && <p className='erroring'>{formik.errors.moviePoint}</p>}
                </div>
                <div>
                <label>Movie Image:</label>

                <input  type="file" accept=".jpg, .jpeg, .png" 
                onChange={(event) => {
                    const file = event.currentTarget.files[0];
                    if (file) {
                    const reader = new FileReader();
                    reader.onload = () => setSelectedFile(reader.result);
                    reader.readAsDataURL(file);
                    }
                }}/>

                </div>
                <button className="buttonAddMovies" type='submit'>Add Movies</button>
            </form>
        </div>
    );
}

export default AddMovies;
