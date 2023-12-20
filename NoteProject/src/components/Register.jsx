import React, { useState } from 'react';
import axios from 'axios';
import Notification, { showNotification } from '../Notification';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../UserContext';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login,logout } = useUser();

  const handleRegister = async () => {

    if (!username || !password) {
        showNotification('warning', 'Kullanıcı adı ve şifre boş olamaz', 'Uyarı', 3000);
        return;
    }

    try {
      const response = await axios.get('http://localhost:3000/users', {
        params: {
          username,
        },
      });

      const existingUser = response.data[0];
      if (existingUser) {
        showNotification('warning','Kullanıcı ismi alınmış, lütfen farklı giriniz','Hata', 3000);
        return;
      }

      const newUser = {
        id: Math.floor(Math.random() * 1000) + 1,
        username,
        password,
      };
      
      const responsePost = await axios.post('http://localhost:3000/users', newUser);
      if(responsePost.data.id) {
        login(newUser);
        showNotification('success', 'Kaydınız başarılı, yönlendiriliyorsunuz','Bilgi', 1000);
        setUsername("");
        setPassword("");
        logout();
        setTimeout(() => {
            navigate('/login');
          }, 1000);
      }

    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <>
    <Notification/>
    <div className="form-container">
      <h2>Lütfen bilgileri doldurun</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Kayıt Ol</button>
    </div>
    </>
  );
};
export default Register;