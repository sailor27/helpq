import React from 'react';
import PropTypes from 'prop-types';

function ConfirmationQuestions(props){
  var questionStyle = {
    backgroundColor: '#ffffff75'
  };
  return (
    <div style={questionStyle}>
      <p>Have you gone through all the steps on the Learn How to Program debugging lesson?</p>
      <button onClick={props.onTroubleshootingConfirmation}>Yes</button>
    </div>
  );
}

ConfirmationQuestions.propTypes = {
  onTroubleshootingConfirmation: PropTypes.func
};

export default ConfirmationQuestions;
