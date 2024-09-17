import { StatusBar } from 'expo-status-bar';
import * as React from 'react'
import { StyleSheet,Image,Text,SafeAreaView,TouchableOpacity,View,Dimensions } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'

const Srep = ({navigation}) =>
{
    const dimensions = Dimensions.get('window');   
  const imageWidth = dimensions.width;
  const imageHeight = dimensions.height;
    return(
        
        <SafeAreaView style={{flex:1, justifyContent:'center'}}>
            <Image resizeMode="contain" style={{flex:1,width:imageWidth,height:imageHeight}} source={require('../assets/sp.jpg')} />
        </SafeAreaView>
      )
}

export default Srep