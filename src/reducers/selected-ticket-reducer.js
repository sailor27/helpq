import selectedTicketReducer from './../../src/reducers/selected-ticket-reducer';
import c from './../constants';
export default (state = {}, action) => {
  switch (action.type) {
  case c.SELECT_TICKET:
    return action.ticketId;
  default:
    return state;
  }
};
