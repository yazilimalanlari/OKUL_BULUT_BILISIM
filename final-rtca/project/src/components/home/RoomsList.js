import React from 'react';
import { Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import $ from '@styles/home';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setSelectedRoom } from '@redux/actions/chat';

const RoomsList = ({ rooms }) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const onPress = room => {
        if (room.userCount < room.capacity) {
            dispatch(setSelectedRoom(room.key, room.userCount))
            navigation.navigate('Chat');
        } else {
            Alert.alert(
                'Oda Kapasitesi Dolu',
                'Başka bir odaya giriş yapın veya yeni bir oda oluşturun.'
            )
        }
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity 
            style={$.listItem} 
            activeOpacity={.7}
            onPress={() => onPress(item)}>
            <Text style={$.listItemText}>{item.name}</Text>
            <Text style={$.listItemText}>{item.userCount}/{item.capacity}</Text>
        </TouchableOpacity>
    );

    return (
        <FlatList
            data={Object.keys(rooms).map(key => ({ key, ...rooms[key] }))}
            keyExtractor={item => item.key}
            renderItem={renderItem}
        />
    )
}

export default RoomsList;