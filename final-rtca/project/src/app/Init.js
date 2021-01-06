import React, { useRef } from 'react';
import { SafeAreaView, BackHandler } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from '@components/app/Navigator';
import { Provider } from 'react-redux';
import store from '@redux/store';
import { disconnect } from '@redux/actions/chat';

const App = () => {
    const routeNameRef = useRef();
    const navigationRef = useRef();
    return (
        <Provider store={store}>
            <SafeAreaView style={{ flex: 1 }}>
                <NavigationContainer
                    ref={navigationRef}
                    onStateChange={() => {
                        const { auth, chat } = store.getState();
                        const currentScreenName = navigationRef.current.getCurrentRoute().name;
                        if (auth.isAuth && currentScreenName === 'Session') {
                            BackHandler.exitApp();
                        } else if (routeNameRef.current === 'Chat' && currentScreenName === 'Home') {
                            store.dispatch(disconnect(chat.selectedRoom, chat.room.userCount));
                        }
                        routeNameRef.current = currentScreenName;
                    }}>
                    <Navigator />
                </NavigationContainer>            
            </SafeAreaView>
        </Provider>
    )
}

export default App;