import React from 'react';
import SingleElement from './singleElement';

function Header() {
  return (
    <div className="header">
      <div className="element">
        <SingleElement/>
      </div>
      <div className="text">
        <div className="title">Chemistry</div>
        <div className="subtext">Is not scary</div>
      </div>
    </div>
  );
}

export default Header;