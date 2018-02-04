import React from "react";
import PropTypes from "prop-types";

function Ticket(props){
  return (
		<div>
				 <h3>{props.spider} - {props.names}</h3>
				 <p><em>{props.issue}</em></p>
				 <hr/>
		</div>
	);
}
//technically optional!
Ticket.propTypes = {
	names: PropTypes.string,
	spider: PropTypes.string,
	issue: PropTypes.string
}

export default Ticket;
