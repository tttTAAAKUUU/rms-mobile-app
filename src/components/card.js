import { StatusBar } from 'expo-status-bar';
import * as React from 'react'
import { StyleSheet,Image,Text,SafeAreaView,TouchableOpacity,View, ImageBackground } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'

const Card = ({title,date,time,price}) =>
{
  return(
      <SafeAreaView style={{flex:1,fontsize:30, fontweight:'bold', justifyContent:'space-between',alignItems:'center',backgroundColor:'#fff'}}>
        <ImageBackground source={require('../assets/cardbg.png')} style={{width:400,height:250}}>
            <Text style={{fontSize:28,fontWeight:500}}>{title}</Text>
            <View style={{flexDirection:'row',justifyContent:'space-between'}} >
                <View style={{flexDirection:'row'}}><Text>{date}</Text></View>
                <View style={{flexDirection:'row'}}><Text>{time}</Text></View>
                <View style={{flexDirection:'row'}}><Text>{price}</Text></View>
            </View>
        </ImageBackground>
      </SafeAreaView>
  )
}

export default Card