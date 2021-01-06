import {
    AUTH_SIGN_IN,
    AUTH_SIGN_OUT,
    AUTH_SIGN_UP,
    AUTH_UPDATE,
    AUTH_ERROR,
    AUTH_DELETE_USER
} from '@redux/types';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const timeout = dispatch => {
    dispatch({ type: AUTH_ERROR });
    setTimeout(() => dispatch({ type: AUTH_ERROR }), 1000);
}

export const signIn = ({ email, password }) => dispatch => {
    auth()
    .signInWithEmailAndPassword(email, password)
    .then(({ user }) => {
        AsyncStorage.setItem('lastLoginDate', new Date().toString());
        dispatch({
            type: AUTH_SIGN_IN,
            payload: {
                id: user.uid,
                username: user.displayName,
                email: user.email                
            }
        });
    })
    .catch(() => timeout(dispatch));
}

export const signUp = ({ username, email, password }) => dispatch => {
    auth()
        .createUserWithEmailAndPassword(email, password)
        .then(currentUser => {
            currentUser.user.updateProfile({
                displayName: username
            }).then(() => {
                AsyncStorage.setItem('lastLoginDate', new Date().toString());
                dispatch({
                    type: AUTH_SIGN_UP,
                    payload: {
                        id: currentUser.user.uid,
                        username,
                        email
                    }
                });
            });
        }).catch(() => timeout(dispatch));
}

export const signOut = () => dispatch => {
    AsyncStorage.setItem('lastLoginDate', new Date().toString());
    dispatch({
        type: AUTH_SIGN_OUT
    });
}

export const updateUser = ({ id, username, email }) => dispatch => {
    const user = auth().currentUser

    user.updateEmail(email).then(() => {
        user.updateProfile({
            displayName: username
        })
        .then(() => {
            console.log('Profile güncellendi.');
            dispatch({
                type: AUTH_UPDATE,
                payload: {
                    username,
                    email
                }
            });
        }).catch(() => timeout(dispatch));
    }).catch(() => timeout(dispatch))
}

export const deleteUser = () => dispatch => {
    auth()
        .currentUser
        .delete()
        .then(() => {
            AsyncStorage.removeItem('lastLoginDate');
            dispatch({ type: AUTH_DELETE_USER });
        })
        .catch(() => timeout(dispatch));
}