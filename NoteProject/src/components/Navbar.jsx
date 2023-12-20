import React from 'react';
import "../styles/Navbar.css";
import { GrNotes } from "react-icons/gr";
import { NavLink } from 'react-router-dom';
import { useUser } from '../UserContext';
import { useNavigate } from 'react-router-dom';
import Notification from '../Notification';
import { FaUserLarge } from "react-icons/fa6";
import { ImPencil } from "react-icons/im";


const Navbar = () => {
  const { user, logout } = useUser();
  const navigate = useNavigate();
  
  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <>
    <Notification/>
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand"><GrNotes/><ImPencil/></div>
        <div className="navbar-buttons">
          <button className="navbar-button">
            <nav>
                <NavLink to="/">Ana Sayfa</NavLink>
            </nav>
          </button>
          {user ? <>
            <button className="navbar-button">
            <nav>
                <NavLink to="/note">Not Ekle</NavLink>
            </nav>
          </button>
            <button className="navbar-button">
            <nav>
                <NavLink to="/notes">Not Listesi</NavLink>
            </nav>
          </button>
            <button className="navbar-button" style={{color:"#005d8e",fontWeight: "bold",fontSize: "medium"}} onClick={handleLogout}>Çıkış Yap</button>
            <div className='profile'>
            <FaUserLarge size={25} className='profileIcon'/>
            <p style={{fontWeight:"bold"}}>{user.username}</p>
            </div>
          </> 
          : 
          <>
          <button className="navbar-button">
          <nav>
                <NavLink to="/login">Giriş Yap</NavLink>
            </nav>
          </button>
          </>}
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;