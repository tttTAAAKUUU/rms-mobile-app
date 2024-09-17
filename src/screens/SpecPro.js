import { StatusBar } from 'expo-status-bar';
import * as React from 'react'
import { StyleSheet,Image,Text,SafeAreaView,TouchableOpacity,View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'

const SpecPro = ({navigation}) =>
{
  return(
      <SafeAreaView style={{flex:1, justifyContent:'space-between',alignItems:'center',backgroundColor:'#fff'}}>
        <Text style={{fontSize:25,fontWeight:'bold'}}> 
          Name: Sbonga
        </Text>
         
        <Text style={{fontSize:25,fontWeight:'bold'}}>
          Surname: Zulu
        </Text>

        <Text style={{fontSize:25,fontWeight:'bold'}}>
          Number: 0789654321
        </Text>

        <Text style={{fontSize:25,fontWeight:'bold'}}>
          Email: sbonga@gmail.com
        </Text>

        <Text style={{fontSize:25}}>
          Should we wish to update Your details please email admin@rms.org
        </Text>

        
      </SafeAreaView>
  )
}

export default SpecPro