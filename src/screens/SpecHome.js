import React from "react";
import { StyleSheet,Image,Text,TextInput,SafeAreaView,TouchableOpacity,View, ImageBackground } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'


const SpecHome = ({navigation})=>
{
return(
    <SafeAreaView style={{flex:1,justifyContent:'center'}}>

         
        <ImageBackground source={require('../assets/profile.jpg')} imageStyle={{ borderRadius: 10}} style={{width:350,height:200,borderRadius:10,justifyContent:'center',alignItems:'center',marginBottom:10}}>
            
            <TouchableOpacity onPress={()=>{navigation.navigate('specpro')}} style={{flex:1,width:350}}>
            <Text style={{backgroundColor: 'rgba(52, 52, 52, 0.5)',color:'white',fontSize:60,fontWeight:500,}}>Profile</Text>
            </TouchableOpacity>
            
        </ImageBackground>

        <ImageBackground source={require('../assets/slot.jpg')} imageStyle={{ borderRadius: 10}} style={{width:350,height:200,borderRadius:10,justifyContent:'center',alignItems:'center',marginBottom:10}}>
            
            <TouchableOpacity onPress={()=>{navigation.navigate('specreq')}} style={{flex:1,width:350}}>
            <Text style={{backgroundColor: 'rgba(52, 52, 52, 0.5)',color:'white',fontSize:60,fontWeight:500,}}>View Requests</Text>
            </TouchableOpacity>
            
        </ImageBackground>

        <ImageBackground source={require('../assets/view.jpg')} imageStyle={{ borderRadius: 10}} style={{width:350,height:200,borderRadius:10,justifyContent:'center',alignItems:'center',marginBottom:10}}>
            
            <TouchableOpacity onPress={()=>{navigation.navigate('mans')}} style={{flex:1,width:350}}>
            <Text style={{backgroundColor: 'rgba(52, 52, 52, 0.5)',color:'white',fontSize:60,fontWeight:500,}}>Manage Slots</Text>
            </TouchableOpacity>
            
        </ImageBackground> 

         
         
    </SafeAreaView>
)
}



export default SpecHome