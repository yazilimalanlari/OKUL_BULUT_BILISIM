import { StyleSheet } from 'react-native';

const fontFamily = 'Mulish-SemiBold',
    purple = '#5c15ad';

export default StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    header: {
        elevation: 1,
        marginTop: 0,
        backgroundColor: purple,
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        height: 75
    },
    headerFullName: {
        color: '#ffffff',
        fontSize: 25,
        textAlign: 'center',
        fontFamily,
        paddingTop: 15
    },
    info: {
        flex: 1,
        minHeight: 150,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    infoInnerText: {
        fontSize: 22,
        fontFamily,
        textAlign: 'left',
        width: '85%'
    },
    pageButton: {
        fontFamily,
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 10,
        backgroundColor: '#000000',
        color: '#ffffff',
        width: '90%',
        alignSelf: 'center',
        borderRadius: 50,
        padding: 15
    },
    workExperience: {
        position: 'absolute',
        left: 0,
        top: '100%',
        right: 0,
        bottom: 0,
        backgroundColor: purple,
        padding: 10,
    },
    workExperienceTitle: {
        fontFamily,
        fontSize: 30,
        color: '#ffffff',
        textAlign: 'center',
        marginTop: 25
    },
    workExperienceDescription: {
        fontFamily,
        fontSize: 18,
        color: '#ffffff',
        marginTop: 15
    }
});