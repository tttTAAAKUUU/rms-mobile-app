import { StatusBar } from 'expo-status-bar';
import * as React from 'react'
import { StyleSheet,Image,Text,SafeAreaView,TouchableOpacity,View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'

const ReportScreen = ({navigation}) =>
{

  return(
      <SafeAreaView style={{flex:1,fontsize:30, fontweight:'bold', justifyContent:'space-between',alignItems:'center',backgroundColor:'#fff'}}>
        <Text>
          select report
        </Text>
        <TouchableOpacity onPress={() =>{}} style={{backgroundColor:'#FFEA00',padding:20,width:'90%',borderRadius:5,flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={{fontWeight:'bold',fontSize:18,color:'#fff'}}>
            Location
          </Text>
          <AntDesign name='arrowright' size={22} color={'#fff'} />
        </TouchableOpacity>
      </SafeAreaView>
  )
}

export default ReportScreen