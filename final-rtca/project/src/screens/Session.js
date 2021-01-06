import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import $ from '@styles/session';
import { connect } from 'react-redux';
import { signIn, signUp } from '@redux/actions/auth';
import { getWeather } from '@redux/actions/settings';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MODE_SIGN_IN = 0;
const MODE_SIGN_UP = 1;

const Session = props => {
    const { signIn, isAuth, navigation, signUp, error, getWeather, weather } = props;
    const [mode, setMode] = useState(MODE_SIGN_IN);
    const [signInForm, setSignInForm] = useState();
    const [signUpForm, setSignUpForm] = useState();
    const [lastLoginDate, setLastLoginDate] = useState(null);

    useEffect(() => {
        if (isAuth) {
            navigation.navigate('Home');
        }
    }, [isAuth]);

    useEffect(() => {
        if (error) {
            Alert.alert('Bir sorun oluştu.', mode === MODE_SIGN_IN ? 'Hatalı kullanıcı adı veya şifre.' : 'Daha sonra tekrar deneyin.');
        }
    }, [error]);

    useEffect(() => {
        getWeather();

        (async () => {
            const lastLoginDate = await AsyncStorage.getItem('lastLoginDate');
            if (lastLoginDate) {
                let format = new Date(lastLoginDate).toLocaleDateString('tr-TR');
                format = format === new Date().toLocaleDateString('tr-TR') ? 'Bugün' : format;
                setLastLoginDate(format);
            }
        })();
    }, []);

    const onChangeMode = () => setMode(mode === MODE_SIGN_IN ? MODE_SIGN_UP : MODE_SIGN_IN);

    const onChange = (name, value) => (mode === MODE_SIGN_IN ? setSignInForm : setSignUpForm)({ ...signInForm, [name]: value });
    const onSignIn = () => signIn(signInForm);
    const onSignUp = () => signUp(signUpForm);

    return (
        <>
            <Text style={{
                position: 'absolute',
                left: 0,
                top: 10,
                right: 0,
                fontFamily: 'Mulish',
                textAlign: 'center'
            }}>{weather}</Text>
            <Text style={{
                position: 'absolute',
                left: 0,
                top: 30,
                right: 0,
                fontFamily: 'Mulish',
                textAlign: 'center'
            }}>
                {lastLoginDate ? `Son Giriş: ${lastLoginDate}` : null}
            </Text>
            <View style={$.container}>
                <Text style={$.title}>{mode === MODE_SIGN_IN ? 'Oturum Aç' : 'Hesap Oluştur'}</Text>
                {mode === MODE_SIGN_IN ?
                <>
                    <TextInput 
                        accessibilityLabel="Kullanıcı adı"
                        style={[
                            $.input,
                            {
                                marginTop: 40
                            }
                        ]}
                        placeholder="E-Posta Adresi"
                        onChangeText={value => onChange('email', value)}
                    />
                    <TextInput 
                        accessibilityLabel="Şifre"
                        style={$.input}
                        placeholder="Şifre"
                        secureTextEntry={true}
                        onChangeText={value => onChange('password', value)}
                    />
                    <TouchableOpacity 
                        style={$.signInButton} 
                        activeOpacity={.7}
                        onPress={onSignIn}>
                        <Text style={$.buttonText}>Giriş Yap</Text>
                    </TouchableOpacity>
                </>
                : <>
                    <TextInput 
                        accessibilityLabel="Kullanıcı Adı"
                        style={[
                            $.input,
                            {
                                marginTop: 40
                            }
                        ]}
                        placeholder="Kullanıcı Adı"
                        onChangeText={value => onChange('username', value)}
                    />
                    <TextInput 
                        accessibilityLabel="E-Posta Adresi"
                        style={$.input}
                        placeholder="E-Posta Adresi"
                        onChangeText={value => onChange('email', value)}
                    />
                    <TextInput 
                        accessibilityLabel="Şifre"
                        style={$.input}
                        placeholder="Şifre"
                        secureTextEntry={true}
                        onChangeText={value => onChange('password', value)}
                    />
                    <TouchableOpacity 
                        style={$.signInButton} 
                        activeOpacity={.7}
                        onPress={onSignUp}>
                        <Text style={$.buttonText}>Hesap Oluştur</Text>
                    </TouchableOpacity>
                </>}
                <TouchableOpacity 
                    style={$.footerTextWrapper} 
                    activeOpacity={.5}
                    onPress={onChangeMode}>
                    <Text style={$.footerText}>
                        {mode === MODE_SIGN_IN 
                        ? 'Hesabınız yok mu? Hemen yeni bir hesap oluşturun.'
                        : 'Zaten bir hesabınız var mı? Oturum Açın.'}
                    </Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

const mapStateToProps = ({
    auth,
    settings
}) => ({
    isAuth: auth.isAuth,
    error: auth.error,
    weather: settings.weather
});
export default connect(mapStateToProps, { signIn, signUp, getWeather }) (Session);