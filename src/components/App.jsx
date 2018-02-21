import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import NewTicketControl from './NewTicketControl';
import Error404 from './Error404';
/*eslint-disable */import Moment from 'moment';/*eslint-disable */
import Admin from './Admin';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class App extends React.Component {
  constructor(props) {
    super(props);
		console.log(props);
    this.state = {
      selectedTicket: null
    };
  }
componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateTicketElapsedWaitTime(),
    60000
    );
  }

  updateTicketElapsedWaitTime() {
    // let newMasterTicketList = Object.assign({}, this.state.masterTicketList);
    // Object.keys(newMasterTicketList).forEach((ticketId) => {
    //   newMasterTicketList[ticketId].formattedWaitTime = (newMasterTicketList[ticketId].timeOpen).fromNow(true);
    // });
    // this.setState({masterTicketList: newMasterTicketList});
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }

  render(){
    var appStyle = {
      margin: '0',
      backgroundColor: '#FFFAFA',
      color: '#EB6EBD',
      fontFamily: 'sans-serif',
      fontSize: '18px',
      textAlign: 'center',
      boxSizing: 'border-box',
      background: 'rgb(201, 164, 112) url("https://images.unsplash.com/photo-1516074269859-f54ee0d65fa7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=59843ca59ee74e93c09ac3ce391f96f1&auto=format&fit=crop&w=1334&q=80") no-repeat center',
      display: 'flex',
      flexFlow: 'column nowrap',
      alignItems: 'center',
      height:'100vh'
    };
    return (
      <div style={appStyle}>
        <Header />
        <Switch>
          <Route exact path='/' render={()=><TicketList ticketList={this.props.masterTicketList} />} />
          <Route path='/newticket' render={()=><NewTicketControl />} />
          <Route path='/admin' render={(props)=><Admin currentRouterPath={props.location.pathname}/>} />
          <Route component={Error404} />
        </Switch>
        <style global jsx>{`
						body{
							margin: 0;
							box-sizing: border-box;
						}
						button{
							font-size: 1em;
							border: 3px solid rgb(201, 164, 112);
							border-radius: 10px;
							padding: 8px;
						}
						`}
        </style>
      </div>
    );
  }
}

const mapStateToProps = state => {
	return {
		masterTicketList: state.masterTicketList
	}
}

App.propTypes = {
  masterTicketList: PropTypes.object
};

export default withRouter(connect(mapStateToProps)(App));
