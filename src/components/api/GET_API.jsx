import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const GET_API = () => {
    const [myData, setMyData] = useState([]);

    useEffect(() => {
        // fetch("http://10.0.2.2:3000/users").then((response)=>{
        //     response.json().then((result)=>{
        //         console.log(result);
        //     })
        // })
        axios.get('http://10.0.2.2:3000/users').then((result) => {
            
            setMyData(result.data);
             console.log("My Data :",myData);
        })
    }, []);
    return (
        <View>
            <Text style={{ fontSize: 24, marginBottom: 10 }}>GET_API</Text>
            {myData.map((person) => {
                // <>
                    <Text key={person.id} style={{ fontSize: 18 }}>{person.name} Hello</Text>
                    {/* <Text style={{ fontSize: 18, marginBottom: 10 }}>{person.name}</Text> */}
                // </>
            })}  
        </View >
    )
}

export default GET_API