// BurgerMenu.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const BurgerMenu = ({ toggleMenu }) => {
  return (
    <div className="burger-menu" onClick={toggleMenu}>
      <FontAwesomeIcon icon={faBars} />
    </div>
  );
};

export default BurgerMenu;