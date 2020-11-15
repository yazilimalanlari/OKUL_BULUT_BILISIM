import React, { useState } from 'react';
import { 
    View,
    Text,
    TextInput,
    TouchableNativeFeedback
} from 'react-native';
import Css from '../assets/css/form';

function Form({ children, title }) {
    return (
        <View style={Css.form}>
            {title ? <Text style={Css.title}>{title}</Text> : null}
            {children}
        </View>
    );
}

Form.Field = ({ 
    title,
    onChangeText,
    type,
    value,
    error
}) => {
    return (
        <View style={Css.field}>
            <Text style={Css.fieldText}>{title}</Text>
            <TextInput 
                style={[
                    Css.fieldInput,
                    error ? Css.fieldInputError : null
                ]}
                selectionColor={'#ffffff50'}
                onChangeText={e => onChangeText && onChangeText(e)}
                secureTextEntry={type === 'password'}
                value={value}
            />
        </View>
    );
}

Form.Button = ({ title, onPress }) => {
    const [pressIn, setPressIn] = useState(false);
    return (
        <View style={Css.field}>
            <TouchableNativeFeedback
                onPressIn={() => setPressIn(true)}
                onPressOut={() => setPressIn(false)}
                onPress={onPress}>
                <Text
                    title={title}
                    accessibilityLabel={title}
                    style={[
                        Css.fieldButton, 
                        pressIn ? Css.fieldButtonPressIn : null
                    ]}
                >{title}</Text>
            </TouchableNativeFeedback>
        </View>
    )
}

export default Form;