import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    root: {
        flex: 1
    },
    field: {
        flex: 1,
        maxHeight: 125,
        padding: 25
    },
    label: {
        fontSize: 15,
        fontFamily: 'Mulish-Regular'
    },
    input: {
        marginTop: 2,
        fontFamily: 'Mulish-Regular',
        fontSize: 17,
        elevation: 1,
        borderRadius: 3,
        paddingLeft: 10,
        paddingRight: 10
    }
});