import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import $ from '@styles/add-room';
import Button from '@components/form/Button';
import { connect } from 'react-redux';
import { addRoom } from '@redux/actions/chat';

const AddRoom = ({ addRoom, navigation }) => {
    const [name, setName] = useState("");
    const [capacity, setCapacity] = useState("");

    const onPressAddRoom = () => {
        addRoom(name, capacity);
        navigation.navigate('Home');
    }

    return (
        <View style={$.root}>
            <TextInput 
                placeholder="Oda Adı"
                style={$.input}
                onChangeText={value => setName(value)}
            />
            <TextInput 
                placeholder="Kapasite"
                style={$.input}
                onChangeText={value => setCapacity(value)}
                keyboardType="numeric"
            />
            <Button 
                title="Oluştur"
                style={{ marginTop: 35 }}
                onPress={onPressAddRoom}
            />
        </View>
    )
}

const mapStateToProps = () => ({});
export default connect(mapStateToProps, { addRoom }) (AddRoom);