import { View, Text, TextInput, Button } from 'react-native'
import React, { useRef } from 'react'

const UseRefHook = () => {

  // When we use useRef() hook component can't rerender
  const myRef = useRef();
  const handleRef = () => {
    // myRef.current.setNativeProps({
    //   text: 'Onkar',
    //   style:{color:"white",backgroundColor:'crimson'}
    // });
    myRef.current.focus();
    // console.log("Hello Onkar")
  }
  return (
    <View>
      <TextInput ref={myRef} placeholder='Enter Your Text' placeholderTextColor="#999" />
      <Button color='#841584' title="Submit" onPress={ handleRef } />
    </View>
  )
}

export default UseRefHook