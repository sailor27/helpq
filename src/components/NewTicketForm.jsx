import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import Moment from 'moment';
import { connect } from 'react-redux';

function NewTicketForm(props){
  let _names = null;
  let _location = null;
  let _issue = null;


  function handleNewTicketFormSubmission(event) {
    const { dispatch } = props;
    event.preventDefault();
    const action = {
      type: 'ADD_TICKET',
      id: v4(),
      names: _names.value,
      location: _location.value,
      issue: _issue.value,
      timeOpen: new Moment()
    };
    dispatch(action);

    _names.value = '';
    _location.value = '';
    _issue.value = '';
  }

  return (
    <div>
      <h3>Request Help</h3>
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
          ref={(input) => {_issue = input;}}/>
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

			`}</style>
    </div>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default connect()(NewTicketForm);
