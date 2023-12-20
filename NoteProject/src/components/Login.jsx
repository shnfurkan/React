import React, { useState } from 'react';
import axios from 'axios';
import Notification, { showNotification } from '../Notification';
import "../styles/Login.css";
import { useNavigate } from 'react-router-dom';
import { useUser } from '../UserContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useUser();

  const handleLogin = async () => {

    if (!username || !password) {
        showNotification('warning', 'Kullanıcı adı ve şifre boş olamaz', 'Uyarı', 3000);
        return;
    }

    try {
      const response = await axios.get('http://localhost:3000/users', {
        params: {
          username,
          password,
        },
      });

      const user = response.data[0];
      if (user) {
        login(user);
        setUsername("");
        setPassword("");
        navigate('/notes');
      } else {
        showNotification('error', 'Kullanıcı bulunamadı','Hata', 3000);
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <>
    <Notification/>
    <div className="form-container">
      <h2>Lütfen Giriş Yapın</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Giriş Yap</button>
    </div>
    <div className="new-button-container">
        <button className="new-button" onClick={()=> navigate("/register")}>Kayıt olmak ister misin?</button>
    </div>
    </>
  );
};

export default Login;