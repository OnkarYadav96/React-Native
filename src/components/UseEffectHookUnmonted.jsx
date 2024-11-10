import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
const UseEffectHookUnmonted = () => {
    useEffect(()=>{
        // to use useEffect for unmounting we need to use return() call back function here
        return ()=>{
            console.log('Child Component Unmounted');
        }
    },[])
  return (
    <View>
      <Text>UseEffectHook Unmounting testing</Text>
    </View>
  )
}

export default UseEffectHookUnmonted;
