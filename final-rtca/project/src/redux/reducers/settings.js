import {
    SETTINGS_TOGGLE_HEADER_MENU,
    SETTINGS_GET_WEATHER
} from '@redux/types';

const initialState = {
    headerMenu: false,
    weather: null
}

export default function settings(state = initialState, action) {
    switch (action.type) {
        case SETTINGS_TOGGLE_HEADER_MENU:
            return {
                ...state,
                headerMenu: !state.headerMenu
            }
        case SETTINGS_GET_WEATHER:
            return {
                ...state,
                weather: action.payload
            }
        default:
            return state;
    }
}