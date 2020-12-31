import { StyleSheet } from 'react-native';
import {
    backgroundColor,
    color
} from './theme';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor
    },
    closeIconWrapper: {
        marginLeft: 'auto',
        marginRight: 15
    },
    closeIcon: {
        fontSize: 35,
        color
    },
    title: {
        color,
        fontSize: 22,
        padding: 5,
        textAlign: 'center'
    },
    text: {
        color
    },
    error: {
        color: 'tomato',
        fontSize: 25,
        textAlign: 'center',
        marginTop: 'auto',
        marginBottom: 'auto'
    }
})