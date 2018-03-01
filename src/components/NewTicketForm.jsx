import React from 'react';
import Moment from 'moment';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import constants from './../constants';
import { addTicket } from './../actions';
const { c } = constants;

function NewTicketForm(props){
  let _names = null;
  let _location = null;
  let _issue = null;

  function handleNewTicketFormSubmission(event) {
    const { dispatch } = props;
    event.preventDefault();
    dispatch(addTicket(_names.value, _location.value, _issue.value));
    _names.value = '';
    _location.value = '';
    _issue.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewTicketFormSubmission}>
        <input
          type='text'
          id='names'
          placeholder='Pair Names'
          ref={(input) => {_names = input;}}/>
        <input
          type='text'
          id='location'
          placeholder='Location'
          ref={(input) => {_location = input;}}/>
        <textarea
          id='issue'
          placeholder='Describe your issue.'
          ref={(textarea) => {_issue = textarea;}}/>
        <button type='submit'>Help!</button>
      </form>
      <style jsx>{`
					form{
						display: flex;
						flex-flow: column nowrap;
						height: 200px;
						align-items: center;
						justify-content: space-between;
					}
					input, textarea{
						font-size: 1em;
						border: 3px solid rgb(201, 164, 112);
						border-radius: 10px;
					}
				`}
      </style>
    </div>
  );
}
export default connect()(NewTicketForm);
