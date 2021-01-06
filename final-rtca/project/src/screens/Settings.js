import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import { connect } from 'react-redux';
import { updateUser, deleteUser } from '@redux/actions/auth';
import $ from '@styles/settings';
import Button from '@components/form/Button';

const Item = ({
    defaultValue,
    onChangeText
}) => (
    <View style={$.field}>
        <Text style={$.label}>Kullanıcı Adı</Text>
        <TextInput 
            defaultValue={defaultValue}
            style={$.input}
            onChangeText={onChangeText ?? null}
        />
    </View>
);

const Settings = props => {
    const { auth, updateUser, navigation, deleteUser } = props;
    const [username, setUsername] = useState(auth.username);
    const [email, setEmail] = useState(auth.email);
    const { error, isAuth } = auth;

    useEffect(() => {
        if (error) {
            Alert.alert('Bir sorun oluştu.', 'Daha sonra tekrar deneyin.');
        }
    }, [error]);

    useEffect(() => {
        if (!isAuth) navigation.navigate('Session');
    }, [isAuth]);

    const onSave = () => updateUser({ 
        id: auth.id,
        username,
        email
    });

    const onDeleteUser = () => {
        Alert.alert(
            "Dikkat bu işlem geri alınamaz.",
            "Hesabınızı silmek istediğinizden emin misiniz?",
            [
                {
                    text: "Vazgeç",
                    style: "cancel"
                },
                {
                    text: "Evet, Sil.",
                    onPress: deleteUser
                }
            ],
            {
                cancelable: false
            }
        )
    }

    return (
        <View style={$.root}>
            <Item 
                title="Kullanıcı Adı"
                defaultValue={username}
                onChangeText={value => setUsername(value)}
            />
            <Item 
                title="E-Posta Adresi"
                defaultValue={email}
                onChangeText={value => setEmail(value)}
            />
            <Button 
                title="Kaydet"
                color="#32ba37"
                style={{ margin: 10 }}
                onPress={onSave}
            />
            <Button
                title="Hesabımı Sil"
                color="#e81014"
                style={{ margin: 10 }}
                onPress={onDeleteUser}
            />
        </View>
    )
}

const mapStateToProps = ({ auth }) => ({
    auth
});
export default connect(mapStateToProps, { updateUser, deleteUser }) (Settings);