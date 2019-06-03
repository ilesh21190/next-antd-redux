import { userTypes } from "../types";
import {getCookie, setCookie, removeCookie} from 'utils/cookie';

let initialState;
if (typeof localStorage !== "undefined") {
   const token = getCookie('token');
   const user = getCookie('user');
   console.log(user);
   if (token) {
       initialState = {
        isLoggedIn: true,
        user : user ? JSON.parse(decodeURIComponent(user)) : {}
       }//JSON.parse(decodeURIComponent(authCookie));
   } else {
       initialState = {
           isLoggedIn: false,
           user: undefined,
           loginLoading: false,
           signupLoading: false,
           error:undefined
       }
   }
} else {
   initialState = {
       isLoggedIn: false,
       user: undefined,
       loginLoading: false,
       signupLoading: false,
       error: undefined
   };
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userTypes.GETME:
      return {
        ...state,
        user: action.user
      };
    case userTypes.LOGIN_REQUEST:
      return {
        ...state,
        loginLoading: true,
        error: undefined
      };
    case userTypes.LOGIN_ERROR:
      return {
        ...state,
        loginLoading: false,
        error: action.error
      };
    case userTypes.LOGIN_SUCCESS:
      setCookie("token", action.user.access_token);
      return {
        ...state,
        loginLoading: false,
        isLoggedIn: true,
        error: undefined,
        user: action.user
      };
    case userTypes.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: undefined
      };
    case userTypes.SIGNUP_REQUEST:
      return {
        ...state,
        signupLoading: true,
        error: undefined
      };
    case userTypes.SIGNUP_ERROR:
      return {
        ...state,
        signupLoading: false,
        error: action.error
      };
    case userTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        signupLoading: false,
        error: undefined,
        user: action.user
      };
    default:
      return state;
  }
};

export default userReducer;
