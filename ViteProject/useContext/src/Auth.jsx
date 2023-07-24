import authContext from './context/authContext'
import { useContext } from 'react';

function Auth() {

    const {status, login} = useContext(authContext);

    return (  
        <div>
            <h3>Giriş yaptin mi?</h3>
            <p>{status ? <p>Evet</p> : <p>Hayir</p> }</p>
            <button onClick={login}>Giriş Yap</button>
        </div>
    );
}

export default Auth;


