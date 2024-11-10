import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import UseEffectHookUnmonted from './UseEffectHookUnmonted'
const UseEffectHook = () => {
    const [count,setCount]=useState(0);
    const [score,setScore]=useState(20);
    const [showChidComponent,setShowChidComponent]=useState(true);
    useEffect(()=>{
        console.log("i am the UseEffect")
    },[]);
  return (
    <View>
      <Text style={{fontSize:30,marginBottom:10}}>UseEffectHook</Text>
      <Text style={{fontSize:30,marginBottom:10}}>Counter: {count}</Text>
      <Text style={{fontSize:30,marginBottom:10}}>Score: {score}</Text>
      <Button title='Conter ++' onPress={()=>setCount(count +1)}/>
      <Button title='Score ++' onPress={()=>setScore(score+1)}/>
        {showChidComponent?<UseEffectHookUnmonted />:<View><Text>Component unmounted</Text></View>}
        <Button title='Check UseEffect also used for Unmount' onPress={()=>setShowChidComponent(!showChidComponent)}/>
    </View>
   
  ) 
}







export default UseEffectHook