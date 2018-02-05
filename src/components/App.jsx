import React from 'react';
import Header from './Header';
import TicketList from './TicketList';

function App(){
  var appStyle = {
    backgroundColor: '#FFFAFA',
    color: '#EB6EBD',
    fontFamily: 'sans-serif',
    fontSize: '18px',
    textAlign: 'center',
    boxSizing: 'border-box'
  };
  return (
    <div style={appStyle}>
      <Header/>
      <TicketList />
    </div>
  );
}

export default App;
