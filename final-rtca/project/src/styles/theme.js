import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    headerToggleWrapper: { 
        position: 'absolute',
        top: 0,
        backgroundColor: '#ffffff',
        minWidth: 150,
        borderWidth: 1,
        borderColor: '#d8d8d8',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        right: 2,
        elevation: 1000,
        flex: 1,
        zIndex: 1
    },
    headerToggleItem: {
        padding: 5,
        height: 50,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerToggleItemText: {
        marginLeft: 5,
        fontSize: 17
    }
});