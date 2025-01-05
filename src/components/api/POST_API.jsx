import { View, Text, TextInput, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'

const POST_API = () => {
    const [formData, setFormData] = useState({ id: '', name: '', email: '' })
    const handleInput = (field, value) => {
        setFormData({ ...formData, [field]: value })
    }

    const formSubmit = async () => {
        try {
            console.log("Check form Data", formData);
            const response = await axios.post('http://10.0.2.2:3000/users', formData)
            Alert.alert('Success', "Data Submittted Sucessfully");
            console.log("Check form Data", response.data);
            setFormData({ id: '', name: '', email: '' })
        } catch (error) {
            Alert.alert("Error", "Failed to submit data");
        }
    }
    return (
        <View>
            <Text>POST_API</Text>
            <TextInput value={formData.id} onChangeText={(value) => handleInput("id", value)} placeholder='Enter ID' />
            <TextInput value={formData.name} onChangeText={(value) => handleInput("name", value)} placeholder='Enter Name' />
            <TextInput value={formData.email} onChangeText={(value) => handleInput("email", value)} placeholder='Enter Email' />
            <Button title="Submit" onPress={formSubmit} />
        </View>
    )
}

export default POST_API