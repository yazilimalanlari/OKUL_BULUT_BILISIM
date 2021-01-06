import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        minWidth: 350,
        maxWidth: 350,
        maxHeight: 475,
        marginLeft: 'auto',
        marginTop: 'auto',
        marginRight: 'auto',
        marginBottom: 'auto',
        borderRadius: 25,
        backgroundColor: '#ffffff',
        elevation: 1,
        borderWidth: 1,
        borderColor: '#d8d8d8'
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
        marginTop: 15
    },
    input: {
        borderWidth: 2,
        borderColor: '#f1f1f1',
        borderBottomColor: '#2562b8',
        margin: 10,
        fontSize: 17,
        paddingLeft: 8,
        paddingRight: 8,
        borderRadius: 4
    },
    signInButton: {
        backgroundColor: '#35c930',
        maxHeight: 50,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 25,
        borderRadius: 25,
        elevation: 5
    },
    buttonText: {
        fontSize: 18,
        color: '#ffffff'
    },
    footerTextWrapper: {
        margin: 10,
        marginTop: 'auto',
    },
    footerText: {
        color: 'blue',
        textAlign: 'center'
    }
});