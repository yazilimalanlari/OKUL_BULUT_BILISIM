import { StyleSheet } from 'react-native';
import { 
    color,
    fontFamily
} from './theme';

const errorColor = '#d6291a';

export default StyleSheet.create({
    form: {
        maxWidth: 360,
        width: '95%',
        backgroundColor: '#20232b',
        padding: 15,
        borderRadius: 3,
        minHeight: 350,
        elevation: 3
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
        color,
        fontFamily
    },
    field: {
        padding: 5
    },
    fieldText: {
        color,
        fontSize: 16,
        fontFamily
    },
    fieldInput: {
        borderColor: '#ffffff',
        borderWidth: 1,
        borderBottomWidth: 2,
        color,
        padding: 7,
        borderRadius: 3,
        height: 45,
        fontSize: 16,
        marginTop: 3,
        fontFamily
    },
    fieldInputError: {
        borderColor: errorColor,
        color: errorColor
    },
    fieldButton: {
        color,
        fontFamily,
        borderWidth: 2,
        borderColor: '#ffffff',
        textAlign: 'center',
        fontSize: 18,
        borderRadius: 3,
        paddingTop: 10,
        paddingBottom: 10
    },
    fieldButtonPressIn: {
        backgroundColor: '#ffffff',
        color: '#000000'
    }
});