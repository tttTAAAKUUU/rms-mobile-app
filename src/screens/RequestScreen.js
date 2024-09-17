import React from "react";
import { StyleSheet,Image,Text,TextInput,Picker,SafeAreaView,TouchableOpacity,View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useState } from "react";
import { SelectList } from "react-native-dropdown-select-list";
import { collection, addDoc } from "firebase/firestore"; 
import DateTimePicker from '@react-native-community/datetimepicker';
import { auth,db } from "../../firebase";
const RequestScreen = ({navigation,route})=>
{
    const em = route.params?.em
    const [date,setDate] = useState(new Date())                                                                                                          
    const [time,setTime] = useState("")
    const [desc,setDesc] = useState("")
    const [address,setAddress] = useState("")
    const [price,setPrice] = useState("")
    const [selectedLoc,setSelectedLoc] = useState("")
    const [selectedSer,setSelectedSer] = useState("")
    const [show,setShow] = useState(false)

    const onChangeDate =(e,selectedDate)=>{
        setDate(selectedDate)
    }

    const [selLoc,setSelLoc] = useState("")
    const [selSer,setSelSer] = useState("")

    const data =[{key:'1',value:'Braamfontein'},
                 {key:'2',value:'Sandton'}]
    
    const menu =[{key:'1',value:'Braids'},
                 {key:'2',value:'Treatment'}]

    const onChange = (e, selectedDate)=>{
        setDate(selectedDate)
        setShow(false)
    };
    const reqs = []

    const createRequest = async ()=>{

        if (selectedSer === '1') {
            setSelSer('Braids')
        }else{
            setSelSer('Treatment')
        }

        if (selectedSer === '1') {
            setPrice('R500')
        }else{
            setPrice('R250')
        }

        if (selectedSer === '1') {
            setDesc('Classic hand done braids with hairpiece included')
        }else{
            setDesc('Wash, conditioning and dry')
        }

        if (selectedLoc === '1') {
            setSelLoc('Braamfontein')
        }else{
            setSelLoc('Sandton')
        }

       

        const docRef = await addDoc(collection(db, "Requests"), {
            title: selSer,
            location: selLoc,
            time: time,
            date:date,
            address:address,
            reqStatus:'pending',
            client: auth.currentUser?.email,
            specialist:'pending',
            price: price ,
            desc: desc

          });

          const docReff = await addDoc(collection(db, "Clients",auth.currentUser?.email,"Requests"), {
            title: selectedSer,
            location: selectedLoc,
            time: time,
            date:date,
            address:address,
            reqStatus:'pending',
            client: auth.currentUser?.email,
            specialist:'pending',
            price: price,
            desc:desc
          });

          alert('Slot created succesfully')
        
    }
   

return(
    
    <SafeAreaView style={{flex:1, justifyContent:'space-between'}}>
        <View style={{paddingHorizontal:25,justifyContent:'space-between'}}>
         
            <SelectList data={data} setSelected={(val) => setSelectedLoc(val)} placeholder="select location"   maxHeight={100}/>

            <SelectList data={menu} setSelected={(val) => setSelectedSer(val)} placeholder="select service" maxHeight={100}/>

            <DateTimePicker value={date} mode="datetime" is24Hour={true} minimumDate={new Date(2023, 10, 18)} style={{margin:60}} />
            <View style={{flexDirection:'row', borderBottomColor:'#ccc',borderBottomWidth:1,paddingBottom:8,marginBottom:25}}>
                
                <TextInput onChangeText={(address)=>{setAddress(address)}} placeholder="Address" style={{flex:1,paddingVertical:0}} keyboardType="email-address"/>
            </View>

            
            {selectedSer === '1' && <Text>Total:R500</Text>}
            {selectedSer === '2' && <Text>Total:R200</Text>}
            {selectedSer === '1' && <Text>Classic hand done braids with hairpiece included</Text>}
            {selectedSer === '2' && <Text>Wash, conditioning and dry</Text>}
            <TouchableOpacity onPress={()=>{createRequest(selectedSer,selectedLoc,)}} style={{backgroundColor:'#FFEA00',padding:20,borderRadius:10,marginBottom:20}}>
                <Text style={{textAlign:'center',fontWeight:'700',fontSize:16,color:'#000000'}}>
                    Confirm Request
                </Text>
            </TouchableOpacity>


        </View>
    </SafeAreaView>
)
} 

export default RequestScreen 