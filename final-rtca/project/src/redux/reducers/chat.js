import {
    CHAT_GET_ROOMS,
    CHAT_GET_ROOM,
    CHAT_SET_SELECTED_ROOM,
    CHAT_DISCONNECT
} from '@redux/types';

const initialState = {
    rooms: {},
    room: {},
    selectedRoom: null
};

export default function chat(state = initialState, action) {
    switch (action.type) {
        case CHAT_GET_ROOMS:
            return {
                ...state,
                rooms: action.payload
            }
        case CHAT_SET_SELECTED_ROOM:
            return {
                ...state,
                selectedRoom: action.payload
            }
        case CHAT_GET_ROOM:
            return {
                ...state,
                room: { ...action.payload }
            }
        case CHAT_DISCONNECT:
            return {
                ...state,
                room: {},
                selectedRoom: null
            }
        default:
            return state;
    }
}