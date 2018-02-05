import React from 'react';

function Header() {
  var headerStyle = {
    backgroundColor: '#FFFAFA',
    color: '#EB6EBD',
    fontFamily: 'monospace',
    fontSize: '32px',
    textAlign: 'center'
  };
  return (
    <div style={headerStyle}>
      <h1>Help Queue!</h1>
    </div>
  );
}

export default Header;
