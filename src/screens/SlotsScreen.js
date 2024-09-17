import React from "react";
import {FlatList, StyleSheet,Image,Text,TextInput,SafeAreaView,TouchableOpacity,View,ImageBackground } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import {useEffect,useState} from "react";


const SlotsScreen = ({navigation})=>

{
    const data = [{id:1,title:'Braids',date:'18/10/23',time:'12:30',price:'R500',add:'21 Sapphire street',loc:'Sandton'},{id:2,title:'Wash',date:'18/10/23',time:'12:30',price:'R500',add:'21 Ire street',loc:'Sandton'}]
   
    const [count,setCount] = useState(0)
return(
    <SafeAreaView style={{flex:1,justifyContent:'space between'}}>
         <Text>Your slots</Text>

         <FlatList
            data={data}
            renderItem={({item}) => 
            <ImageBackground source={require('../assets/cardbg.png')} style={{width:400,height:150,margin:5,borderRadius:5,marginBottom:10}}>
            <Text style={{fontSize:28,fontWeight:500}}>{item.title}</Text>
            <View style={{flexDirection:'column',justifyContent:'space-between'}} >
                <View style={{flexDirection:'row'}}><Text>{item.date}</Text></View>
                <View style={{flexDirection:'row'}}><Text>{item.time}</Text></View>
                <View style={{flexDirection:'row'}}><Text>{item.add}</Text></View>
                <View style={{flexDirection:'row'}}><Text>{item.loc}</Text></View>
                <View style={{flexDirection:'row'}}><Text>{item.price}</Text></View>
                <TouchableOpacity onPress={()=>{data.pop()}} ><Text style={{color:'red'}}>Cancel</Text></TouchableOpacity>
            </View>
        </ImageBackground>}
            keyExtractor={(item)=>item.id}
          />
    </SafeAreaView>
)
}



export default SlotsScreen