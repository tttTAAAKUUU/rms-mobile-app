import React from "react";
import { StyleSheet,Image,Text,TextInput,SafeAreaView,TouchableOpacity,View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import {useEffect,useState} from "react";
import { auth, firebase_auth } from "../../firebase";
import { signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";


const SpecialistLog = ({navigation})=>
{
    const [email,setEmail]= useState('')
    const [password,setPassword]= useState('')


const handleLogIn = async ()=>{
    if (email && password) {
        try {

            if (email.length ===0  || password.length===0) {
                alert("email and password can't be empty")
            } 

            await signInWithEmailAndPassword(auth,email,password)
            navigation.navigate('spechome', { em: email })
            
        } catch (error) {
            alert("Enter valid login details")
        }
    }
}

return(
    <SafeAreaView style={{flex:1, justifyContent:'center'}}>
        <View style={{paddingHorizontal:25}}>
            <View style={{alignItems:'center'}}>
                 <Image source={require('../assets/logo.png')} style={{width:300,height:150}} /> 
            </View>
            <Text style={{fontSize:28, fontWeight:'500', marginBottom:30,color:'#333'}} >Login</Text>
            <View style={{flexDirection:'row', borderBottomColor:'#ccc',borderBottomWidth:1,paddingBottom:8,marginBottom:25}}>
                <AntDesign name="mail" size={20} color={'#666'} style={{marginRight:5}}/>
                <TextInput onChangeText={(text)=>{setEmail(text)}} placeholder="Email" style={{flex:1,paddingVertical:0}} keyboardType="email-address"/>
            </View>
            <View style={{flexDirection:'row', borderBottomColor:'#ccc',borderBottomWidth:1,paddingBottom:8,marginBottom:25}}>
                <AntDesign name="lock1" size={20} color={'#666'} style={{marginRight:5}}/>
                <TextInput onChangeText={(text)=>{setPassword(text)}} placeholder="Password" style={{flex:1,paddingVertical:0}} secureTextEntry={true}/>
                <TouchableOpacity onPress={()=>{}}>
                    <Text style={{color:'#AD40AF', fontWeight:'700'}}>Forgot password?</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={handleLogIn} style={{backgroundColor:"#FFEA00",padding:20,borderRadius:10,marginBottom:20}}>
                <Text style={{textAlign:'center',fontWeight:'700',fontSize:16,color:'#000000'}}>
                    Login
                </Text>
            </TouchableOpacity>
            <View style={{flexDirection:'row', justifyContent:'centers'}}>
                <Text style={{ fontWeight:'700'}}>Are you new here?</Text>
                <TouchableOpacity onPress={()=>{navigation.navigate('Register')}}><Text style={{color:'#AD40AF', fontWeight:'700'}}> Register</Text></TouchableOpacity>
            </View>
            <View style={{flexDirection:'row', justifyContent:'centers'}}>
                <Text style={{ fontWeight:'700'}}>Are you an admin?</Text>
                <TouchableOpacity onPress={()=>{navigation.navigate('adlog')}}><Text style={{color:'#AD40AF', fontWeight:'700'}}> login here</Text></TouchableOpacity>
            </View>


        </View>
    </SafeAreaView>
)
}

export default SpecialistLog