import { View, Text, TextInput, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'

const PATCH_API = () => {
    const [formData, setFormData] = useState({ id: '', name: '', email: '' })
    const handleInput = (field, value) => {
        setFormData({ ...formData, [field]: value })
    }

    const updateFormData = async () => {
        try {
            console.log("Check form Data", formData);
            const response = await axios.patch(`http://10.0.2.2:3000/users/${formData.id}`, { ...formData.name && { name: formData.name }, ...formData.email && { email: formData.email } });
            Alert.alert('Success', "Data Patched Sucessfully");
            console.log("Check form Data 2", response.data);
            setFormData({ id: '', name: '', email: '' })
        } catch (error) {
            Alert.alert("Error", "Failed to update data");
        }
    }
    return (
        <View>
            <Text>PATCHED_API</Text>
            <TextInput value={formData.id} onChangeText={(value) => handleInput("id", value)} placeholder='Enter ID' />
            <TextInput value={formData.name} onChangeText={(value) => handleInput("name", value)} placeholder='Enter Name' />
            <TextInput value={formData.email} onChangeText={(value) => handleInput("email", value)} placeholder='Enter Email' />
            <Button title="Submit" onPress={updateFormData} />
        </View>
    )
}

export default PATCH_API