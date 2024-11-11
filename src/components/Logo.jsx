import React from 'react';
import logoImage from '/logo.png'

function Logo() {
  return (
    <div>
      <img src={logoImage} alt="Logo"className="logo"/>
    </div>
  );
}

export default Logo;