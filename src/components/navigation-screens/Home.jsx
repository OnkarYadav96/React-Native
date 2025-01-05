import { View, Text } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View>
      <Text>Home</Text>
      <Button title="Go to About screen" onPress={()=>navigation.navigate('About')}/>
    </View>
  )
}

export default Home