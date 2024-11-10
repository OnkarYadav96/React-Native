import { View, Text, ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native'
import React,{useState} from 'react'

const Loader = () => {
    const[loading,setLoading]=useState(false);
    const toggleLoader=()=>{
        setLoading(!loading)
    }
  return (
    <View style={styles.container}>
      {/* <ActivityIndicator/> */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{loading?'Hide Loader':'Show Loader'}</Text>
      </TouchableOpacity>
      {loading && (
        <View style={styles.loaderContainer}>
            <ActivityIndicator size='large' color='#4CAF50' onPress={toggleLoader}/>
        <Text style={styles.loadingText}>Loading...</Text>
        </View>
      )} 
    </View> 
  )
}

export default Loader;


const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#f0f0f0"
    },
    button:{
        paddingVertical:12,
        paddingHorizontal:20,
        backgroundColor:10,
        borderRadius:10,
        marginBottom:20,
        color:"#f9c2ff"
    },
    buttonText:{
        fontWeight:'600',
        color:'#ffff',
        fontSize:15
    } ,
    loadingText:{
        marginTop:10,
        fontSize:16,
        color:'#4CAF50',
        fontWeight:"600",
    },
    loaderContainer:{
        justifyContent:'center',
        alignItems:'center',
        shadowColor:"#000",
        elevation:5
    }
})