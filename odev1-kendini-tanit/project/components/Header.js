import React, { useRef } from 'react';
import { View, Text, Animated } from 'react-native';
import Styles from '../helpers/styles';


export default props => {
    let style = {};
    if (props.hide) {
        style = {
            top: -75
        };
    }
    return (
        <View style={{ ...Styles.header, ...style }}>
            <Text style={Styles.headerFullName}>
                {props.fullName}
            </Text>
        </View>
    );
}