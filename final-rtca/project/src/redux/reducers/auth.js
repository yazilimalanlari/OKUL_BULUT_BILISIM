import {
    AUTH_SIGN_IN,
    AUTH_SIGN_OUT,
    AUTH_SIGN_UP,
    AUTH_UPDATE,
    AUTH_ERROR,
    AUTH_DELETE_USER
} from '@redux/types';

const initialState = {
    isAuth: false,
    id: null,
    username: null,
    email: null,
    error: false
}

export default function auth(state = initialState, action) {
    switch (action.type) {
        case AUTH_SIGN_IN:
            return {
                ...state,
                isAuth: true,
                ...action.payload
            }
        case AUTH_SIGN_OUT:
            return {
                isAuth: false,
                username: null,
                email: null
            }
        case AUTH_SIGN_UP:
            return {
                isAuth: true,
                ...action.payload
            }
        case AUTH_UPDATE:
            return {
                ...state,
                ...action.payload
            }
        case AUTH_ERROR:
            return {
                ...state,
                error: !state.error
            }
        case AUTH_DELETE_USER:
            return {
                isAuth: false,
                id: null,
                username: null,
                email: null,
                error: false
            }
        default:
            return state;
    }
}