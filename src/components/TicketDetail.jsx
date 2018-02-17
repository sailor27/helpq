import React from 'react';
import PropTypes from 'prop-types';

function TicketDetail(props){
  const ticketDetailStyle = {
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
    <div style={ticketDetailStyle}>
      <hr/>
      <h1>{props.selectedTicket.names} - {props.selectedTicket.location}</h1>
      <h2>Submitted {props.selectedTicket.formattedWaitTime} ago</h2>
      <h4><em>{props.selectedTicket.issue}</em></h4>
      <hr/>
    </div>
  );
}


TicketDetail.propTypes = {
  selectedTicket: PropTypes.object
};


export default TicketDetail;
