import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { toggleHeaderMenu } from '@redux/actions/settings';

// Screens
import Home from '@screens/Home';
import Settings from '@screens/Settings';
import Session from '@screens/Session';
import AddRoom from '@screens/AddRoom';
import Chat from '@screens/Chat';

const Stack = createStackNavigator();

const Navigator = ({ toggleHeaderMenu }) => {
    return (
        <Stack.Navigator initialRouteName="Session">
            <Stack.Screen 
                name="Session"
                component={Session}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name="Home"
                component={Home}
                options={props => ({
                    headerTitle: 'Sohbet Odaları',
                    headerLeft: false,
                    headerRight: () => (
                        <>
                            <TouchableOpacity 
                                style={{ marginRight: 10 }}
                                onPress={() => toggleHeaderMenu()}>
                                <Icon 
                                    name="more-vert"
                                    size={25}
                                />
                            </TouchableOpacity>
                        </>
                    )
                })}
            />
            <Stack.Screen 
                name="Settings"
                component={Settings}
                options={{
                    title: 'Ayarlar'
                }}
            />
            <Stack.Screen 
                name="AddRoom"
                component={AddRoom}
                options={{
                    title: 'Yeni Oda Oluştur'
                }}
            />
            <Stack.Screen 
                name="Chat"
                component={Chat}
                options={{
                    title: 'Sohbet'
                }}
            />
        </Stack.Navigator> 
    )
}

const mapStateToProps = ({}) => ({});
export default connect(mapStateToProps, { 
    toggleHeaderMenu 
}) (Navigator);