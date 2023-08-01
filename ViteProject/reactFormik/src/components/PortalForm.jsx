import {Form,Formik} from 'formik'
import CustomInput from './CustomInput';
import { advancedSchema } from '../schemas';

const onSubmit = async (values,actions) => {
    await new Promise((resolve)=> {
        setTimeout(resolve,1000);
    })
    actions.resetForm();
}

function PortalForm() {

    return (  
        <>
        {' '}
        <Formik
       initialValues={{ username: '', university: '', access: false}}
       onSubmit={onSubmit}
       validationSchema={advancedSchema}
     >
       {() => (
         <Form>
           <CustomInput label='Kullanici Adi' type='text' name='username' placeholder='Lütfen kullanici adini giriniz.'/>
         </Form>
       )}
        </Formik>
        </>
    );
}

export default PortalForm;


