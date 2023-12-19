import React from 'react';

const Navbar = () => {
  const handleChangeLanguage = (newLanguage) => {
    localStorage.setItem('language', newLanguage);
    window.location.reload();
  };

  return (
    <nav>
      <ul>
        <li>
          <button onClick={() => handleChangeLanguage('en')}>English</button>
        </li>
        <li>
          <button onClick={() => handleChangeLanguage('tr')}>Türkçe</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

