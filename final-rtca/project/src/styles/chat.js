import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    messageItem: {
        padding: 10,
        backgroundColor: '#95bfc7',
        margin: 5,
        borderRadius: 10,
        flex: 1,
        flexDirection: 'row',
        marginTop: 25
    },
    myMessage: {
        backgroundColor: '#98c795'
    },
    messageText: {
        fontFamily: 'Mulish-Regular',
        color: '#ffffff'
    },
    messageUsername: {
        position: 'absolute',
        left: 10,
        top: -20,
        backgroundColor: '#95bfc7',
        color: '#ffffff',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        fontFamily: 'Mulish-Regular',
        paddingLeft: 5,
        paddingRight: 5,
        height: 20,
        borderWidth: 1,
        borderColor: '#d8d8d8'
    },
    myMessageUsername: {
        backgroundColor: '#98c795'
    }
});