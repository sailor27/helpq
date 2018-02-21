import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import c from './../constants';

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
  function handleSavingSelectedTicket(ticketId){
    const {dispatch} = props;
    const action = {
      type: c.SELECT_TICKET,
      ticketId: ticketId
    };
    dispatch(action);
  }
  const ticketInformation =
    <div style={ticketStyles}>
      <h3>{props.location} - {props.names}</h3>
      <h4>{props.formattedWaitTime}</h4>
      <hr/>
    </div>;
  if (props.currentRouterPath === '/admin'){
    return (
      <div onClick={() => {handleSavingSelectedTicket(props.ticketId);}}>
        {ticketInformation}
      </div>
    );
  } else {
    return (
      <div>
        {ticketInformation}
      </div>
    );
  }
}
Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string,
  ticketId: PropTypes.string.isRequired
};

export default connect()(Ticket);
