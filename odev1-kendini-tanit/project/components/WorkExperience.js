import React, { useEffect, useRef } from 'react';
import { Animated, Text, View } from 'react-native';
import Styles from '../helpers/styles';

export default class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { title, description, close, show } = this.props;

        let style = {};

        if (show) {
            style = {
                top: 0
            };
        }

        return (
            <View style={{ ...Styles.workExperience, ...style }}>
                <Text
                    style={{ 
                        fontSize: 35,
                        position: 'absolute',
                        top: 10,
                        right: 10,
                        width: 35,
                        height: 35,
                        color: '#ffffff'
                    }}
                    onPress={close}>&times;</Text>
                <Text style={Styles.workExperienceTitle}>{title}</Text>
                <Text style={Styles.workExperienceDescription}>{description}</Text>
            </View>
        );
    }
}