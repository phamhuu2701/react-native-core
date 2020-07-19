import ACTIONS from './../constants/auth';

const initialState = {
  user: {},
  isLoggedIn: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.USER_LOGIN_SUCCESS:
      return {
        user: action.payload,
        isLoggedIn: true,
      };
    case ACTIONS.USER_LOGIN_FAILED:
      return {
        ...initialState,
      };
    case ACTIONS.USER_LOGOUT:
      return {
        ...initialState,
      };
    default:
      return {...state};
  }
};
