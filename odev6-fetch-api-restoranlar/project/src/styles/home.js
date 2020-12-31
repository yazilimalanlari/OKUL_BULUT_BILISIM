import { StyleSheet } from 'react-native';
import {
    backgroundColor,
    color
} from './theme';

export default StyleSheet.create({
    container: {
        backgroundColor,
        padding: 5,
        flex: 1
    },
    search: {
        borderColor: '#d8d8d8',
        borderWidth: 2,
        borderRadius: 25,
        fontSize: 18,
        paddingLeft: 15,
        paddingRight: 15,
        color,
        marginTop: 15,
        height: 55
    },
    notFoundText: {
        color: '#ffffff',
        margin: 10,
        fontSize: 18,
        textAlign: 'center',
        marginTop: 'auto',
        marginBottom: 'auto'
    },
    listItem: {
        height: 50,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    listItemTitle: {
        color: '#ffffff',
        fontSize: 17
    }
});