import { StatusBar } from 'expo-status-bar';
import * as React from 'react'
import { StyleSheet,Image,Text,SafeAreaView,TouchableOpacity,View,FlatList,ImageBackground } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { doc, getDoc } from "firebase/firestore";
const SpecRequests = ({navigation}) =>
{
    const data = [{id:1,title:'Braids',date:'18/10/23',time:'12:30',price:'R500',add:'21 Sapphire street',loc:'Sandton'},{id:2,title:'Wash',date:'18/10/23',time:'12:30',price:'R500',add:'21 Ire street',loc:'Sandton'},{id:3,title:'Wash',date:'18/10/23',time:'12:30',price:'R500',add:'21 Ire street',loc:'Braamfontein'}]

    const dataa =[]

    const getData = async ()=>{
        const docRef = doc(db, "Requests");
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
            dataa = docSnap.data
          } 
    }

  return(
      <SafeAreaView style={{flex:1, justifyContent:'space-between'}}>
        <Text>
          View Requests</Text>

          <FlatList
            data={data}
            renderItem={({item}) => 
            <ImageBackground source={require('../assets/cardbg.png')} style={{width:400,height:250,marginRight:60}}>
            <Text style={{fontSize:28,fontWeight:500}}>{item.title}</Text>
            <View style={{flexDirection:'row',justifyContent:'space-between'}} >
                <View style={{flexDirection:'row'}}><Text>{item.date}</Text></View>
                <View style={{flexDirection:'row'}}><Text>{item.time}</Text></View>
                <View style={{flexDirection:'row'}}><Text>{item.add}</Text></View>
                <View style={{flexDirection:'row'}}><Text>{item.loc}</Text></View>
                <View style={{flexDirection:'row'}}><Text>{item.price}</Text></View>
                <TouchableOpacity on onPress={()=>{data.pop}}><Text style={{color:'green'}}>Accept</Text></TouchableOpacity>
            </View>
        </ImageBackground>}
            keyExtractor={(item)=>item.id}
          />
        
      </SafeAreaView>
  )
}

export default SpecRequests