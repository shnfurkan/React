import { useFormik } from 'formik';
import { basicSchema } from '../schemas';
import {Link} from 'react-router-dom'

function GeneralForm() {

// https://formik.org/docs/tutorial

    const onSubmit = async (values,actions) => {
        await new Promise((resolve)=> {
            setTimeout(resolve,1000);
        })
        actions.resetForm();
    }

    const {values,errors,handleChange,handleSubmit,isSubmitting} = useFormik({
        initialValues: {
          email: '',
          age: '',
          password: '',
          againPassword: '',
        },
        validationSchema: basicSchema,
        onSubmit
      });

    return (  
<div>
        <form onSubmit={handleSubmit} className='form'>
            <label>Email</label> <br></br>
            <input
            value={values.email}
            id='email'
            onChange={handleChange}
            type='email'
            placeholder='Lütfen emailinizi giriniz.'
            className= {errors.email ? 'input-error' : ''}
            />
            {errors.email && <p className='error'>{errors.email}</p>}
            <br></br>

            <label>Yaş</label> <br></br>
            <input
            value={values.age}
            id='age'
            onChange={handleChange}
            type='number'
            placeholder='Lütfen yaşinizi giriniz.'
            className= {errors.age ? 'input-error' : ''}
            />
            {errors.age && <p className='error'>{errors.age}</p>}
            <br></br>

            <label>Şifre</label> <br></br>
            <input
            value={values.password}
            id='password'
            onChange={handleChange}
            type='password'
            placeholder='Lütfen şifrenizi giriniz.'
            className= {errors.password ? 'input-error' : ''}
            />
            {errors.password && <p className='error'>{errors.password}</p>}
            <br></br>

            <label>Şifre Tekrar</label> <br></br>
            <input
            value={values.againPassword}
            id='againPassword'
            onChange={handleChange}
            type='password'
            placeholder='Lütfen tekrar şifrenizi giriniz.'
            className= {errors.againPassword ? 'input-error' : ''}
            />
            {errors.againPassword && <p className='error'>{errors.againPassword}</p>}
            <br></br>

        <br></br>
        <button type='submit' className='saveButton' disabled={isSubmitting}>Kaydet</button>
            
        </form>
        <br></br>
        <Link to='/portal'>Portal'a Git!</Link>
</div>
    );
}

export default GeneralForm;

