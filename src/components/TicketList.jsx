import React from 'react';
import Ticket from './Ticket';
import PropTypes from 'prop-types';

function TicketList(props){

  var ticketListStyles = {
    background: 'rgb(201, 164, 112) url("https://images.unsplash.com/photo-1516074269859-f54ee0d65fa7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=59843ca59ee74e93c09ac3ce391f96f1&auto=format&fit=crop&w=1334&q=80") no-repeat center',
    height: '80vh',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'space-around',
    alignItems: 'center'
  };
  return (
    <div style={ticketListStyles}>
      <hr/>
      {props.ticketList.map((ticket) =>
			  <Ticket names={ticket.names}
			    location={ticket.location}
			    issue={ticket.issue}
			    formattedWaitTime={ticket.formattedWaitTime}
			    currentRouterPath={props.currentRouterPath}
			    key={ticket.id}/>
      )}
	   </div>
	  );
}

TicketList.propTypes = {
	  ticketList: PropTypes.array,
	  currentRouterPath: PropTypes.string
};
export default TicketList;
