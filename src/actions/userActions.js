import axios from 'axios';
import { apiBaseUrl } from '../constants';
import { REGISTER_USER, LOGIN_USER, LOGOUT } from './types';
import { axiosDefaultHeaders } from '../utils/helpers';
axiosDefaultHeaders(axios);

export const registerNewUser = (user) => async (dispatch) => {
    let { data } = await axios.post(apiBaseUrl + 'users', user);
    dispatch({ type: REGISTER_USER, userInfo: data });
}

export const login = (loginDetails) => async (dispatch) => {
    let { data } = await axios.post(apiBaseUrl + 'login', loginDetails);
    dispatch({ type: LOGIN_USER, userInfo: data });
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('token');
    dispatch({ type: LOGOUT });
}

export const verifyLoggedInUser = () => async (dispatch) => {
    if (localStorage.getItem('token')) {
        let { data } = await axios.post(apiBaseUrl + 'tokenVerify');
        dispatch({ type: LOGIN_USER, userInfo: data });
    }   
}