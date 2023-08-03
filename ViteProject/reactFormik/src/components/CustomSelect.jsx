import { useField } from "formik";

function CustomSelect({label, ...props}) {

    const [field,meta] = useField(props);

    return (  
        <div>
            <label>{label}</label> <br></br>
            <select {...field} {...props} className={meta.error ? 'input-error' : ''}></select>
            
            {meta.error && <p className="error">{meta.error}</p>}
        </div>

    );
}

export default CustomSelect;

