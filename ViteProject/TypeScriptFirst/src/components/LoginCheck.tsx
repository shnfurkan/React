import { useState } from 'react'

type userList = {
    name:string,
    lastName:string,
    age:string,
}

function LoginCheck() {

    const [value, setValue] = useState<userList | null>(null);

    const handleClick = () => {
        setValue({
            name: "furkan",
            lastName: "sahin",
            age: "22",
        })
    }

    const handleClickOut = () => {
        setValue(null);
    }

    return (  
        <div>
            <button onClick={handleClick}>Giriş Yap</button> {" "}
            <button onClick={handleClickOut}>Çikiş Yap</button> <br></br>
            {value?.name} {" "}
            {value?.lastName} {" "}
            {value?.age}
        </div>
    );
}

export default LoginCheck;



