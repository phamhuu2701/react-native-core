import ACTIONS from "./../constants/auth";
import { USER_TOKEN, LANGUAGE } from "./../../utils/asyncStorage";

export function loginAction(data) {
  return async (dispatch) => {
    try {
      // call api

      // success
      if (data.username === "admin" && data.password === "admin") {
        // Set localStorage
        await USER_TOKEN.set("***********************************************");
        await LANGUAGE.set("en");

        return dispatch({
          type: ACTIONS.USER_LOGIN_SUCCESS,
          payload: data,
        });
      } else {
        // Delete localStorage
        await USER_TOKEN.delete();
        await LANGUAGE.delete();

        return dispatch({
          type: ACTIONS.USER_LOGIN_FAILED,
          payload: {},
        });
      }
    } catch (error) {
      throw error;
    }
  };
}

export function logoutAction() {
  return async (dispatch) => {
    try {
      // Delete localStorage
      await USER_TOKEN.delete();
      await LANGUAGE.delete();

      return dispatch({
        type: ACTIONS.USER_LOGOUT,
      });
    } catch (error) {
      throw error;
    }
  };
}
