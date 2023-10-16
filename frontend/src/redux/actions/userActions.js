```javascript
import axios from 'axios';

export const REGISTER_USER = 'REGISTER_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const EDIT_PROFILE = 'EDIT_PROFILE';
export const SET_PREFERENCES = 'SET_PREFERENCES';

export const registerUser = (userData) => async dispatch => {
    try {
        const response = await axios.post('/api/users/register', userData);
        dispatch({
            type: REGISTER_USER,
            payload: response.data
        });
    } catch (error) {
        console.error('Error during registration:', error);
    }
};

export const loginUser = (userData) => async dispatch => {
    try {
        const response = await axios.post('/api/users/login', userData);
        dispatch({
            type: LOGIN_USER,
            payload: response.data
        });
    } catch (error) {
        console.error('Error during login:', error);
    }
};

export const editProfile = (userData) => async dispatch => {
    try {
        const response = await axios.put('/api/users/edit', userData);
        dispatch({
            type: EDIT_PROFILE,
            payload: response.data
        });
    } catch (error) {
        console.error('Error during profile editing:', error);
    }
};

export const setPreferences = (userData) => async dispatch => {
    try {
        const response = await axios.put('/api/users/preferences', userData);
        dispatch({
            type: SET_PREFERENCES,
            payload: response.data
        });
    } catch (error) {
        console.error('Error during preference setting:', error);
    }
};
```