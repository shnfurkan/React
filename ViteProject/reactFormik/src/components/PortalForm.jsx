import {Form,Formik} from 'formik'
import CustomInput from './CustomInput';
import { advancedSchema } from '../schemas';
import CustomSelect from './CustomSelect';
import CustomCheckbox from './CustomCheckbox';
import {Link} from 'react-router-dom'

const onSubmit = async (values,actions) => {
    await new Promise((resolve)=> {
        setTimeout(resolve,1000);
    })
    actions.resetForm();
}

function PortalForm() {

    return (  
        <>
        <Formik
       initialValues={{ username: '', university: '', access: false}}
       onSubmit={onSubmit}
       validationSchema={advancedSchema}
     >
       {({isSubmitting}) => (
         <Form>
           <CustomInput label='Kullanici Adi' type='text' name='username' placeholder='Lütfen kullanici adini giriniz.'/>
           
           <CustomSelect 
           label='Okulunuz'
           name='university'
           placeholder='Lütfen üniversitenizi seçiniz.'
           >
            <option value=''>Lütfen Üniversitenizi Seçiniz.</option>
            <option value='boğaziçi'>Boğaziçi üniversitesi</option>
            <option value='odtü'>Orta Doğu Teknik Üniversitesi</option>
            <option value='itü'>İstanbul Teknik Üniversitesi</option>
           </CustomSelect>

           <CustomCheckbox
           type='checkbox'
           name='access'
           />
           <br></br> <button type='submit' disabled={isSubmitting}>Kaydet</button>

         </Form>
       )}
        </Formik>
        <br></br>
        <Link to='/'>Ana Sayfaya Git!</Link>

        </>
    );
}

export default PortalForm;




