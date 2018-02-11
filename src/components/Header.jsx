import React from 'react';
import { Link } from 'react-router-dom';

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
      <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link> |<Link to="/cheese">Error Zone</Link>
    </div>
  );
}

export default Header;
