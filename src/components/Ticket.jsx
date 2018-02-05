import React from 'react';
import PropTypes from 'prop-types';

function Ticket(props){
  var ticketStyles = {
    marginBottom: '10px',
    padding: '5px',
    backgroundColor: '#FFFAFA',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    width: '450px',
    height: '200px',
    boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
  };
  return (
    <div style={ticketStyles}>
      <h3>{props.location} - {props.names}</h3>
      <p><em>{props.issue}</em></p>
    </div>
  );
}
//technically optional!
Ticket.propTypes = {
  names: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string
};

export default Ticket;
