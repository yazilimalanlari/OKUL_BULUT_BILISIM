import React, { useEffect, useRef } from 'react';
import { Text, Animated } from 'react-native';
import Styles from '../helpers/styles';

export default props => {
    const animate = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(
            animate,
            {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true
            }
        ).start();
    }, [animate]);

    return (
        <Animated.View style={{...Styles.info, opacity: animate}}>
            <Text style={Styles.infoInnerText}>Yaş: {props.age}</Text>
            <Text style={Styles.infoInnerText}>Lise Bilgisi: {props.highSchoolInfo}</Text>
            <Text style={Styles.infoInnerText}>Memleket: {props.homeland}</Text>
        </Animated.View>
    );
}