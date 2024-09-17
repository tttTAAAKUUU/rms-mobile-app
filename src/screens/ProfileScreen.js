import React from "react";
import { StyleSheet,Image,Text,TextInput,SafeAreaView,TouchableOpacity,View } from 'react-native';

import {useEffect,useState} from "react";
import { auth,db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";



const ProfileScreen = ({navigation,route})=>
{
    const em = route.params?.em
    const[nameCl,setNameCl] = useState(false)
    const[snameCl,setSNameCl] = useState(false)
    const[emailCl,setEmailCl] = useState(false)
    const[numCl,setNumCl] = useState(false)
    const[user,setUser] = useState([])

    const [name,setName] = useState('')
    const [sname,setsName] = useState('')
    const [email,setEmail] = useState('')
    const [num,setNum] = useState('')

    const updateName =async ()=>{
        await setDoc(doc(db, "Clients", auth.currentUser?.email), {
            name: name
        });
    }

    const updateSname =async ()=>{
        await setDoc(doc(db, "Clients", auth.currentUser?.email), {
            surname: sname
        });
    }

    const updateEmail =async ()=>{
        await setDoc(doc(db, "Clients", auth.currentUser?.email), {
            email: email
        });
    }

    const updateNum =async ()=>{
        await setDoc(doc(db, "Clients", auth.currentUser?.email), {
            number: num
        });
    }

    const handleSignOut =()=>{
        auth.signOut()
        .then(()=>{navigation.navigate("launch")})
        .catch(error => alert(error.message))
    }

    useEffect(()=>{
        const getData = async ()=>{
            const docRef = doc(db, "Clients", auth.currentUser?.email);
            const docSnap = await getDoc(docRef)
            const data =[]
    
            if (docSnap.exists()) {
                getDoc(docRef)
                .then((doc)=>{setUser(doc.data())})
              } 
              
        }
        getData()
        setName(user.name)
        setEmail(user.email)
        setNum(user.number)
        setsName(user.surname)
    })

    
return(
    <SafeAreaView style={{flex:1, justifyContent:'center'}}>
        <View style={{paddingHorizontal:25}}>
        <View style={{flexDirection:'row', borderBottomColor:'#ccc',borderBottomWidth:1,paddingBottom:15,marginBottom:25}}>
                
                <Text>{name}</Text>
                <TouchableOpacity onPress={()=>{setNameCl(true)}}>
                    <Text style={{color:"#AD40AF"}}> update name</Text>      
                </TouchableOpacity>  
            </View>
            {nameCl &&  <View style={{flexDirection:'row', borderBottomColor:'#ccc',borderBottomWidth:1,paddingBottom:15,marginBottom:25,justifyContent:'space-around'}}>
                <TextInput placeholder="Enter new Name" value={name} onChangeText={(name)=>{setName(name)}}style={{flex:1,paddingVertical:0}} />
                <TouchableOpacity onPress={updateName}>
                    <Text style={{color:'#AD40AF', fontWeight:'700'}}>Confirm     </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{ setNameCl(false)}}>
                    <Text style={{color:'#AD40AF', fontWeight:'700'}}>Cancel</Text>
                </TouchableOpacity>
            </View> }

        </View>

        <View style={{paddingHorizontal:25}}>
        <View style={{flexDirection:'row', borderBottomColor:'#ccc',borderBottomWidth:1,paddingBottom:15,marginBottom:25}}>
                
            <Text>{sname}</Text>
                <TouchableOpacity onPress={()=>{setSNameCl(true)}}>
                    <Text style={{color:"#AD40AF"}}>   update surname</Text>      
                </TouchableOpacity>  
            </View>
            {snameCl &&  <View style={{flexDirection:'row', borderBottomColor:'#ccc',borderBottomWidth:1,paddingBottom:15,marginBottom:25}}>
                <TextInput placeholder="Enter new surname" value={sname} onChangeText={(sname)=>{setsName(sname)}} style={{flex:1,paddingVertical:0}} />
                <TouchableOpacity onPress={updateSname}>
                    <Text style={{color:'#AD40AF', fontWeight:'700'}}>Confirm     </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{ setSNameCl(false)}}>
                    <Text style={{color:'#AD40AF', fontWeight:'700'}}>Cancel</Text>
                </TouchableOpacity>
            </View> }

        </View>

        <View style={{paddingHorizontal:25}}>
        <View style={{flexDirection:'row', borderBottomColor:'#ccc',borderBottomWidth:1,paddingBottom:15,marginBottom:25}}>
                
                <Text>{email}</Text>
                <TouchableOpacity onPress={()=>{setEmailCl(true)}}>
                    <Text style={{color:"#AD40AF"}}>   update email</Text>      
                </TouchableOpacity> 
                
            </View>
            {emailCl &&  <View style={{flexDirection:'row', borderBottomColor:'#ccc',borderBottomWidth:1,paddingBottom:8,marginBottom:25}}>
                <TextInput placeholder="Enter new email" value={email} onChangeText={(email)=>{setEmail(email)}} style={{flex:1,paddingVertical:0}} />
                <TouchableOpacity onPress={updateEmail}>
                    <Text style={{color:'#AD40AF', fontWeight:'700'}}>Confirm     </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{ setEmailCl(false)}}>
                    <Text style={{color:'#AD40AF', fontWeight:'700'}}>Cancel</Text>
                </TouchableOpacity>
            </View> }

        </View>

        <View style={{paddingHorizontal:25}}>
        <View style={{flexDirection:'row', borderBottomColor:'#ccc',borderBottomWidth:1,paddingBottom:8,marginBottom:25}}>
                
                <Text>{num}</Text>
                <TouchableOpacity onPress={()=>{setNumCl(true)}}>
                    <Text style={{color:"#AD40AF"}}>   update number</Text>      
                </TouchableOpacity>  
            </View>
            {numCl &&  <View style={{flexDirection:'row', borderBottomColor:'#ccc',borderBottomWidth:1,paddingBottom:8,marginBottom:25}}>
                <TextInput placeholder="Enter new number" value={num} onChangeText={(num)=>{setNum(num)}} style={{flex:1,paddingVertical:0}} />
                <TouchableOpacity onPress={updateNum}>
                    <Text style={{color:'#AD40AF', fontWeight:'700'}}>Confirm     </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{ setNumCl(false)}}>
                    <Text style={{color:'#AD40AF', fontWeight:'700'}}>Cancel</Text>
                </TouchableOpacity>
            </View> }

        </View>

        <TouchableOpacity onPress={handleSignOut} style={{backgroundColor:'#FFEA00',padding:20,borderRadius:10,marginBottom:20}}>
                <Text style={{textAlign:'center',fontWeight:'700',fontSize:16,color:'#000000'}}>
                    Sign out
                </Text>
            </TouchableOpacity>

            

        
    </SafeAreaView>
)
}

export default ProfileScreen 