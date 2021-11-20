import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput,Alert} from 'react-native';
import { auth, createUserWithEmailAndPassword } from '../config/firebase';
import * as Facebook from 'expo-facebook';


export default function Signup() {
    const [emailVal, setEmailVal] = useState('');
    const [passVal, setPassVal] = useState('');

    const signup = async () => {
        let registeredUser = await createUserWithEmailAndPassword(auth, emailVal, passVal);

        console.log(registeredUser);
    }
    const facebookAuth = async () => {
        try {
            await Facebook.initializeAsync({
                appId: '1325314211282249',
            });
            const {
                type,
                token,
                expirationDate,
                permissions,
                declinedPermissions,
            } = await Facebook.logInWithReadPermissionsAsync({
                permissions: ['public_profile'],
            });

            if (type === 'success') {
                // Get the user's name using Facebook's Graph API
                const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
                Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
            } else {
                // type === 'cancel'
            }


        } catch (e) {
            console.log(e, 'error occurred.');
        }
    }

    return (

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Email:</Text>
            <TextInput style={{ height: 40,borderWidth:1,width:300,padding: 10}}
             value={emailVal}
              onChangeText={(email) => { setEmailVal(email) }}
               placeholder='Enter your Email' />
            <Text>Password:</Text>
            <TextInput style={{ height: 40,borderWidth:1,width:300,padding:10}}
             secureTextEntry={false}
              value={passVal}
               onChangeText={(password) => { setPassVal(password) }}
               placeholder='Ener your Password' />
            <TouchableOpacity onPress={signup} style={{backgroundColor:'orange',marginVertical:10,padding:10}}>
                <Text>Signup</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ height: 35, width: 70, backgroundColor: 'blue', color: '#4267B2' }} onPress={facebookAuth}>
                <Text style={{ textAlign: 'center', color: '#fff' }}>Signup With Facebook</Text>
            </TouchableOpacity>
        </View>
    );
}