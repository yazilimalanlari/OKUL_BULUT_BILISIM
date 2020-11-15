import React, { useState, useEffect, useRef } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import Theme from './assets/css/theme';
import Form from './components/Form';


function Register({ onSuccess }) {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [age, setAge] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordAgain, setPasswordAgain] = useState();
    const [textInputErrors, setTextInputErrors] = useState([]);
    const saveBtnFirstClick = useRef(false);

    const isEmpty = i => i === undefined || i.filterSpace().length === 0;

    const formControl = (returnType = false) => {
        if (!saveBtnFirstClick.current) return;
        const errors = [];
        const fields = { firstName, lastName, age, email, password, passwordAgain };

        for(const name in fields) {
            if (isEmpty(fields[name])) errors.push(name);
        }

        if (!errors.includes('passwordAgain') && password !== passwordAgain) {
            errors.push('passwordAgain');
        }

        setTextInputErrors(errors);
        
        if (returnType) return errors.length === 0;
    }
    
    useEffect(formControl, [firstName, lastName, age, email, password, passwordAgain]);

    const register = () => {
        if (!saveBtnFirstClick.current) saveBtnFirstClick.current = true;
        if (!formControl(true)) return;
        onSuccess({ firstName, lastName });
    }

    return (
        <Form title="Kayıt Ol">
            <Form.Field 
                title="Ad"
                value={firstName}
                onChangeText={value => setFirstName(value)}
                error={textInputErrors.includes('firstName')}
            />
            <Form.Field 
                title="Soyad"
                value={lastName}
                onChangeText={value => setLastName(value)}
                error={textInputErrors.includes('lastName')}
            />
            <Form.Field 
                title="Yaş"
                value={age}
                onChangeText={value => setAge(value)}
                error={textInputErrors.includes('age')}
            />
            <Form.Field 
                title="E-Posta adresi"
                value={email}
                onChangeText={value => setEmail(value)}
                error={textInputErrors.includes('email')}
            />
            <Form.Field 
                title="Şifre"
                value={password}
                onChangeText={value => setPassword(value)}
                type="password"
                error={textInputErrors.includes('password')}
            />
            <Form.Field 
                title="Şifre tekrar"
                value={passwordAgain}
                onChangeText={value => setPasswordAgain(value)}
                type="password"
                error={textInputErrors.includes('passwordAgain')}
            />
            <Form.Button 
                title="Giriş Yap"
                onPress={register}
            />
        </Form>
    );
}

function App() {
    const [user, setUser] = useState({});
    const [success, setSuccess] = useState(false);

    const getFullName = ({ firstName, lastName }) => `${firstName} ${lastName}`;

    const result = (
        <View style={Theme.result}>
            <Text style={Theme.resultTitle}>
                Kaydınız oluşturuldu.
            </Text>
            <Text style={Theme.resultText}>
                Hoşgeldin {getFullName(user)}
            </Text>
        </View>
    )
    return (
        <SafeAreaView style={Theme.app}>
            {!success
            ? <Register 
                onSuccess={(user) => {
                    setUser(user);
                    setSuccess(true);
                }}
            />
            : result}
        </SafeAreaView>
    );
}

export default App;