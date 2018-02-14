import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

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
      <h4>{props.formattedWaitTime} ago</h4>
      <p><em>{props.issue}</em></p>
    </div>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string.isRequired,
  formattedWaitTime: PropTypes.string.isRequired,
};

export default Ticket;
