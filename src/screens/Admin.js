import React from "react";
import { StyleSheet,Image,Text,TextInput,SafeAreaView,TouchableOpacity,View, ImageBackground, ScrollView } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'


const Admin = ({navigation})=>
{
return(
    <SafeAreaView style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor: 'grey'}}>
        <ScrollView>
        <ImageBackground source={require('../assets/reg.jpg')} imageStyle={{ borderRadius: 10}} style={{width:350,height:200,borderRadius:10,justifyContent:'center',alignItems:'center',marginBottom:30}}>
            
            <TouchableOpacity onPress={()=>{navigation.navigate('crespec')}} style={{flex:1,width:350}}>
            <Text style={{backgroundColor: 'rgba(52, 52, 52, 0.5)',color:'white',fontSize:30,fontWeight:500}}>Create Specialist</Text>
            </TouchableOpacity>
            
        </ImageBackground>

         <ImageBackground source={require('../assets/rep.jpeg')} imageStyle={{ borderRadius: 10}} style={{width:350,height:200,borderRadius:10,justifyContent:'center',alignItems:'center',marginBottom:30}}>
            
            <TouchableOpacity onPress={()=>{navigation.navigate('srep')}} style={{flex:1,width:350}}>
            <Text style={{backgroundColor: 'rgba(52, 52, 52, 0.5)',color:'white',fontSize:30,fontWeight:500}}>View Specialist Report</Text>
            </TouchableOpacity>
            
        </ImageBackground>

        <ImageBackground source={require('../assets/rep.jpeg')} imageStyle={{ borderRadius: 10}} style={{width:350,height:200,borderRadius:10,justifyContent:'center',alignItems:'center',marginBottom:30}}>
            
            <TouchableOpacity onPress={()=>{navigation.navigate('frep')}} style={{flex:1,width:350}}>
            <Text style={{backgroundColor: 'rgba(52, 52, 52, 0.5)',color:'white',fontSize:30,fontWeight:500}}>View Feedback Report</Text>
            </TouchableOpacity>
            
        </ImageBackground>

        <ImageBackground source={require('../assets/rep.jpeg')} imageStyle={{ borderRadius: 10}} style={{width:350,height:200,borderRadius:10,justifyContent:'center',alignItems:'center',marginBottom:30}}>
            
            <TouchableOpacity onPress={()=>{navigation.navigate('serep')}} style={{flex:1,width:350}}>
            <Text style={{backgroundColor: 'rgba(52, 52, 52, 0.5)',color:'white',fontSize:30,fontWeight:500}}>View Service Report</Text>
            </TouchableOpacity>
            
        </ImageBackground>

        <ImageBackground source={require('../assets/rep.jpeg')} imageStyle={{ borderRadius: 10}} style={{width:350,height:200,borderRadius:10,justifyContent:'center',alignItems:'center',marginBottom:30 }}>
            
            <TouchableOpacity onPress={()=>{navigation.navigate('lrep')}} style={{flex:1,width:350}}>
            <Text style={{backgroundColor: 'rgba(52, 52, 52, 0.5)',color:'white',fontSize:30,fontWeight:500}}>View location Report</Text>
            </TouchableOpacity>
            
        </ImageBackground>
        </ScrollView>

    </SafeAreaView>
)
}



export default Admin