import React, { useRef } from 'react';
import { FlatList, View, Text } from 'react-native';
import $ from '@styles/chat';
import { useSelector } from 'react-redux';

const MessageList = ({ messages }) => {
    const username = useSelector(state => state.auth.username);
    const ref = useRef();

    const isMyMessage = messageUsername => username === messageUsername;

    const renderItem = ({ item }) => (
        <View style={[
            $.messageItem,
            isMyMessage(item.username) ? $.myMessage : null
        ]}>
            <Text style={[
                $.messageUsername,
                isMyMessage(item.username) ? $.myMessageUsername : null
            ]}>{isMyMessage(item.username) ? 'Ben' : item.username} - {item.date.toLocaleTimeString('tr-TR')}</Text>
            <Text style={$.messageText}>{item.message}</Text>
        </View>
    );

    return <FlatList
        ref={ref}
        data={Object.keys(messages)
            .map(key => ({ 
                key, 
                ...messages[key], 
                date: new Date(messages[key].date)
            }))
            .sort((a, b) => a.date - b.date)}
        keyExtractor={item => item.key}
        renderItem={renderItem}
        onContentSizeChange={() => ref.current.scrollToEnd({ animated: true })}
    />
}

export default MessageList;