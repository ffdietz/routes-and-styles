import React from 'react'
import NavigateBar from './NavigateBar';

const Header = () => {
  return (
    <div className="header-container">
      <h1>Movies Guide</h1>
      <NavigateBar />
    </div>
  );
}

export default Header