import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    listItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 25,
        paddingRight: 25,
        height: 50,
        backgroundColor: '#ffffff',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        borderRadius: 5,
        borderColor: '#d8d8d8',
        elevation: 1
    },
    listItemText: {
        fontSize: 18,
        fontFamily: 'Mulish-Regular'
    }
});