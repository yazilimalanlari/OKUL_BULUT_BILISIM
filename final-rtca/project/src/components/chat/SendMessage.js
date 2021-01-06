import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage } from '@redux/actions/chat';

const SendMessage = () => {
    const [value, setValue] = useState("");
    const { selectedRoom } = useSelector(state => state.chat);
    
    const onSendMessage = () => {
        if (value.length === 0) return;
        sendMessage(selectedRoom, value);
        setValue("");
    }

    return <TextInput 
        placeholder="Bir mesaj yazın..."
        style={{
            paddingLeft: 10,
            paddingRight: 10
        }}
        value={value}
        onChangeText={value => setValue(value)}
        onEndEditing={onSendMessage}
    />
}

export default SendMessage;