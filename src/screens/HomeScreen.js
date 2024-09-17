import { useRoute } from "@react-navigation/native";
import React from "react";
import { StyleSheet,Image,Text,TextInput,SafeAreaView,TouchableOpacity,View, ImageBackground } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'


const HomeScreen = ({navigation,route})=>
{
    const ema = route.params?.em
return(
    <SafeAreaView style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor: 'grey'}}>

        


        <ImageBackground source={require('../assets/profile.jpg')} imageStyle={{ borderRadius: 10}} style={{width:350,height:200,borderRadius:10,justifyContent:'center',alignItems:'center',marginBottom:10}}>
            
            <TouchableOpacity onPress={()=>{ console.log(ema); navigation.navigate('Profile')}} style={{flex:1,width:350}}>
            <Text style={{backgroundColor: 'rgba(52, 52, 52, 0.5)',color:'white',fontSize:60,fontWeight:500,}}>Profile</Text>
            </TouchableOpacity>
            
        </ImageBackground>

        <ImageBackground source={require('../assets/slot.jpg')} imageStyle={{ borderRadius: 10}} style={{width:350,height:200,borderRadius:10,justifyContent:'center',alignItems:'center',marginBottom:10}}>
            
            <TouchableOpacity onPress={()=>{navigation.navigate('Request')}} style={{flex:1,width:350}}>
            <Text style={{backgroundColor: 'rgba(52, 52, 52, 0.5)',color:'white',fontSize:60,fontWeight:500}}>Create Slot</Text>
            </TouchableOpacity>
            
        </ImageBackground>

        <ImageBackground source={require('../assets/view.jpg')} imageStyle={{ borderRadius: 10}} style={{width:350,height:200,borderRadius:10,justifyContent:'center',alignItems:'center'}}>
            
            <TouchableOpacity onPress={()=>{navigation.navigate('Slots')}} style={{flex:1,width:350}}>
            <Text style={{backgroundColor: 'rgba(52, 52, 52, 0.5)',color:'white',fontSize:60,fontWeight:500}}>View Slots</Text>
            </TouchableOpacity>
            
        </ImageBackground>
         
    </SafeAreaView>
)
}



export default HomeScreen