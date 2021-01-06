import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import $ from '@styles/theme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import { toggleHeaderMenu } from '@redux/actions/settings';
import { signOut } from '@redux/actions/auth';


const Layout = ({ children, headerMenu, toggleHeaderMenu, signOut }) => {
    const navigation = useNavigation();

    const toggleList = [
        {
            key: 'settings',
            title: 'Ayarlar',
            icon: 'settings',
            onPress() {
                navigation.navigate('Settings');
                toggleHeaderMenu();
            }
        },
        {
            key: 'add-room',
            title: 'Yeni Oda Oluştur',
            icon: 'add-comment',
            onPress() {
                navigation.navigate('AddRoom')
                toggleHeaderMenu();
            }
        },
        {
            key: 'log-out',
            title: 'Çıkış Yap',
            icon: 'exit-to-app',
            onPress() {
                signOut();
                navigation.navigate('Session');
                toggleHeaderMenu();
            }
        }
    ];
    
    return (
        <View style={{ flex: 1 }}>
            {headerMenu && <View style={$.headerToggleWrapper}>
                {toggleList.map(item => (
                    <TouchableOpacity 
                        key={item.key}
                        style={$.headerToggleItem}
                        onPress={() => {
                            item.onPress();
                        }}>
                        <Icon
                            name={item.icon}
                            size={24} 
                        />
                        <Text style={$.headerToggleItemText}>{item.title}</Text>
                    </TouchableOpacity>
                ))}
            </View>}
            {children}
        </View>
    )
}

const mapStateToProps = ({ settings }) => ({
    headerMenu: settings.headerMenu
});
export default connect(mapStateToProps, { 
    toggleHeaderMenu,
    signOut
}) (Layout);