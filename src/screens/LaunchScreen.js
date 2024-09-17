import { StatusBar } from 'expo-status-bar';
import * as React from 'react'
import { StyleSheet,Image,Text,SafeAreaView,TouchableOpacity,View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'

const LaunchScreen = ({navigation}) =>
{
  return(
      <SafeAreaView style={{flex:1, justifyContent:'space-between',alignItems:'center',backgroundColor:'#fff'}}>
        <Text>
          ROOM mobile salon
        </Text>

        <View style={{alignItems:'center'}}>
                 <Image source={require('../assets/logo.png')} style={{width:300,height:150}} /> 
            </View>
         
        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{backgroundColor:'#FFEA00',padding:20,width:'90%',borderRadius:5,flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={{fontWeight:'bold',fontSize:18,color:'#000000'}}>
            Let's begin!
          </Text>
          <AntDesign name='arrowright' size={22} color={'#000000'} />
        </TouchableOpacity>
      </SafeAreaView>
  )
}

export default LaunchScreen