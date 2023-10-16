import { USER_REGISTER_SUCCESS, USER_REGISTER_FAIL, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGOUT, SET_MESSAGE, PROFILE_EDIT_SUCCESS, PROFILE_EDIT_FAIL, PREFERENCE_SET_SUCCESS, PREFERENCE_SET_FAIL } from '../actions/types';

const user = JSON.parse(localStorage.getItem('user'));

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
      };
    case USER_REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
      };
    case USER_LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case USER_LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case PROFILE_EDIT_SUCCESS:
      return {
        ...state,
        user: { ...state.user, ...payload.user },
      };
    case PROFILE_EDIT_FAIL:
      return {
        ...state,
      };
    case PREFERENCE_SET_SUCCESS:
      return {
        ...state,
        user: { ...state.user, preferences: payload.preferences },
      };
    case PREFERENCE_SET_FAIL:
      return {
        ...state,
      };
    case SET_MESSAGE:
      return {
        ...state,
        message: payload,
      };
    default:
      return state;
  }
}