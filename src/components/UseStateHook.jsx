import { View, Text, Button } from 'react-native'
import React ,{useState}from 'react'

const UseStateHook = () => {
  const [name, setName] = useState("Onku");
    return (
    <View>
      <Text>Name :{name}</Text>
      <Button title="Change Name" onPress={() => { setName("Onkar") }} />
    </View>
  )
}

export default UseStateHook