import { useField } from "formik";

function CustomCheckbox({label, ...props}) {

    const [field,meta] = useField(props);

    return (  
        <div>
            <input {...field} {...props} className={meta.error ? 'input-error' : ''}></input>
            
            {meta.error && <p className="error">{meta.error}</p>}
            <span>Kullanim koşullarini kabul ediyorum.</span>
        </div>

    );
}

export default CustomCheckbox;

