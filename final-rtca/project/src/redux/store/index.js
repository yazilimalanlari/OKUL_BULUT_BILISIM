import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Reducers
import settings from '@redux/reducers/settings';
import auth from '@redux/reducers/auth';
import chat from '@redux/reducers/chat';


export default createStore(combineReducers({
    settings,
    auth,
    chat
}), applyMiddleware(thunk));