import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = ({ title, onPress = () => {}, style = {}, color }) => (
    <TouchableOpacity style={[
        {
            backgroundColor: color ?? '#6a26d1',
            maxHeight: 50,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5
        },
        style
    ]}
    activeOpacity={.8}
    onPress={onPress}>
        <Text style={{
            fontSize: 17,
            color: '#ffffff'
        }}>{title}</Text>
    </TouchableOpacity>
)

export default Button;