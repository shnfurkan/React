import { useSelector, useDispatch } from 'react-redux'
import "../styles/AddMovies.css"
import { useFormik } from 'formik';
import { basicSchema } from '../schemas';
import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit'
import { addedMoviesActions } from '../Api';

function AddMovies() {

    const [selectedFile, setSelectedFile] = useState(null);

    const dispatch = useDispatch()
    const {movieName,movieYear,movieType,moviePoint,movieImage} = useSelector((state) => state.form)

    const formik = useFormik({
        initialValues: {
          movieName,
          movieType,
          movieYear,
          moviePoint,
          movieImage,
        },
        validationSchema: basicSchema,

        onSubmit: (values) => {

        const movieData = {
            movieName: values.movieName,
            movieType: values.movieType,
            movieYear: values.movieYear,
            moviePoint: values.moviePoint,
            movieImage: selectedFile,
            id: nanoid(),
          };
        
        dispatch(addedMoviesActions(movieData));
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
