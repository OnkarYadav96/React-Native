import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const LoginForm = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin=()=>{
        
    }
    return (
        <View>
            <Text>LoginForm</Text>
            <TextInput
                placeholder='User Name'
                value={userName}
                onChangeText={setUserName}
                keyboardType='email-address'
                autoCapitalize='none'
                placeholderTextColor='#999'
            />

            <TextInput
                placeholder='Password'
                value={password}
                onChangeText={setPassword}
                placeholderTextColor='#999'
                secureTextEntry
            />

   <TouchableOpacity onPress={handleLogin}>
    <Text>Login</Text>
   </TouchableOpacity>
        </View>
    )
}

export default LoginForm