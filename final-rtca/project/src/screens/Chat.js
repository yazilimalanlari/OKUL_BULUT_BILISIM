import React, { useEffect } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { getRoom } from '@redux/actions/chat';
import { useNavigation } from '@react-navigation/native';
import MessageList from '@components/chat/MessageList';
import SendMessage from '@components/chat/SendMessage';

const Chat = ({ room, selectedRoom, getRoom }) => {
    const navigation = useNavigation();
    
    useEffect(() => {
        getRoom(selectedRoom);
    }, [selectedRoom]);

    useEffect(() => {
        navigation.setOptions({ title: room.name ?? '' });
    }, [room]);

    return (
        <View style={{ flex: 1 }}>
            <MessageList 
                messages={room.messages ?? {}}
            />
            <SendMessage />
        </View>
    )
}

const mapStateToProps = ({ chat }) => ({
    room: chat.room,
    selectedRoom: chat.selectedRoom
});
export default connect(mapStateToProps, { getRoom }) (Chat);