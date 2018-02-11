
import React from 'react';

class NewTicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({formVisibleOnPage: true});
    alert('formVisibleOnPage: ' + this.state.formVisibleOnPage);
  }


  render(){
    return (
      <div>
        <p>This is the NewTicketControl component!</p>
        <p>My state is {this.state.formVisibleOnPage}</p>
        <strong onClick={this.handleClick}>Click me to change my state!</strong>
      </div>
    );
  }
}

export default NewTicketControl;
