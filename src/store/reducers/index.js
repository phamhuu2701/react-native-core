import {combineReducers} from 'redux';
import ACTIONS from './../constants/auth';
import auth from './auth';

const appReducer = combineReducers({
  auth,
});

export default (state, action) => {
  if (action.type === ACTIONS.USER_LOGOUT) {
    state = undefined;
  }

  return appReducer(state, action);
};
