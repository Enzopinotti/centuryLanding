import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/testing');
  };

  return (
    <header>
      <img
        alt='logo century'
        className='logoCentury'
        src='https://fedesagency.com/century21/logoCentury.png'
        onClick={handleLogoClick}
        style={{ cursor: 'pointer' }}
      />
    </header>
  );
};

export default Header;