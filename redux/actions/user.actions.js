import { userTypes } from "../types";
import authAPI from 'config/authAPI';
import axios from 'axios';
import qs from 'qs';
import {openNotification} from 'utils/notification';
export const getme = () => {
  return dispatch => {
    axios.get("/api/user/me").then(response => {
      dispatch({
        type: userTypes.GETME,
        user: response.data
      });
    });
  };
};

export const login = (credentials) => {
  return dispatch => {
    dispatch({
      type: userTypes.LOGIN_REQUEST
    });
    authAPI
      .post("/auth/oauth/token", qs.stringify({
        username:credentials.username,
        password:credentials.password,
        source:'admin',
        grant_type:'password'
      }),{withCredentials:true})
      .then(response => {
        dispatch({
          type: userTypes.LOGIN_SUCCESS,
          user: response.data
        });
      })
      .catch(error => {
        openNotification('error','Opps! invalid login',error.response.data.error_description);  
        dispatch({
          type: userTypes.LOGIN_ERROR,
          error: error.response.data.error_description
        });
      });
  };
};

export const logout = () => {
  return dispatch => {
    axios.get("/api/user/logout").then(response => {
      dispatch({ type: userTypes.LOGOUT });
    });
  };
};

export const signup = user => {
  return async dispatch => {
    dispatch({
      type: userTypes.SIGNUP_REQUEST
    });
    await axios
      .post("/api/user/signup", user)
      .then(response => {
        dispatch({
          type: userTypes.SIGNUP_SUCCESS,
          user: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: userTypes.SIGNUP_ERROR,
          error: 'not found'
        });
      });
  };
};
