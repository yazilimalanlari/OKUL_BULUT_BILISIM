import {
    CHAT_GET_ROOMS,
    CHAT_GET_ROOM,
    CHAT_SET_SELECTED_ROOM,
    CHAT_DISCONNECT
} from '@redux/types';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

const ref = database().ref('rooms');

export const addRoom = (name, capacity) => () => {
    ref.push()
        .set({
            name,
            capacity,
            userCount: 0
        });
}

export const getRooms = () => dispatch => {
    ref.on('value', rooms => {
        if (rooms.exists()) {
            dispatch({
                type: CHAT_GET_ROOMS,
                payload: rooms.val()
            });
        }
    });
}

export const getRoom = id => dispatch => {
    database()
        .ref(`rooms/${id}`)
        .on('value', room => {
            dispatch({
                type: CHAT_GET_ROOM,
                payload: room.val()
            });
        });
}

export const setSelectedRoom = (id, userCount) => dispatch => {
    database()
        .ref(`rooms/${id}`)
        .update({
            userCount: userCount + 1
        })
        .then(() => dispatch({
            type: CHAT_SET_SELECTED_ROOM,
            payload: id
        }));
}

export const sendMessage = (roomId, message) => {
    database()
        .ref(`rooms/${roomId}/messages`)
        .push()
        .set({
            username: auth().currentUser.displayName,
            message,
            date: new Date().toString()
        });
}

export const disconnect = (roomId, userCount) => dispatch => {
    database()
        .ref(`rooms/${roomId}`)
        .update({
            userCount: userCount - 1
        })
        .then(() => setTimeout(() => {
            dispatch({ type: CHAT_DISCONNECT });
        }, 500))
        .catch(e => console.log('Error!', e.message));
}