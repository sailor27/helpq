import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import NewTicketControl from './NewTicketControl';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
function App(){
  var appStyle = {
    margin: '0',
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
      <Switch>
        <Route exact path='/' component={TicketList} />
        <Route path='/newticket' component={NewTicketControl} />
        <Route component={Error404} />
      </Switch>

      <style global jsx>{`
					body{
						margin: 0;
						box-sizing: border-box;
					}
				`}
      </style>

    </div>
  );
}

export default App;
