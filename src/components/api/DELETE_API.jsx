import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';

const DELETE_API = () => {
    const [id, setID] = useState();
    const handleDeleteId = async () => {
        try {
            const response = await axios.delete(`http://10.0.2.2:3000/users/${id}`)
            Alert.alert('Success', "Data Patched Sucessfully");
            console.log("Data Deleted", response.data);
        } catch (error) {
            Alert.alert("Error", "Failed to delete data");
        }
    }
    return (
        <View>
            <Text>DELETE_API</Text>
            <TextInput value={id} onChangeText={(value) => setID(value)} placeholder='Enter delete ID' />
            <Button title="Delete" onPress={handleDeleteId} />
        </View>
    )
}

export default DELETE_API