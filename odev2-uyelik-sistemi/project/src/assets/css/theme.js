import { StyleSheet } from 'react-native';

export const color = '#ffffff';
export const fontFamily = 'JosefinSans-SemiBold';

export default StyleSheet.create({
    app: {
        backgroundColor: '#101117',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    result: {
        padding: 25
    },
    resultTitle: {
        color,
        fontFamily,
        fontSize: 35,
        width: '100%'
    },
    resultText: {
        color,
        fontFamily,
        fontSize: 25,
        width: '100%',
        padding: 10
    }
});