import { useField } from "formik";

function CustomInput({label, ...props}) {

    const [field,meta] = useField(props);

    return (  
        <div>
            <label>{label}</label> <br></br>
            <input {...field} {...props} className={meta.error ? 'input-error' : ''}></input>
            
            {meta.error && <p className="error">{meta.error}</p>}
        </div>

    );
}

export default CustomInput;

