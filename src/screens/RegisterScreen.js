
import React from "react";
import { StyleSheet,Image,Text,TextInput,SafeAreaView,TouchableOpacity,View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { doc, setDoc } from "firebase/firestore"; 
import {useEffect,useState} from "react";
import { auth,db } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";


const RegisterScreen = ({navigation})=>
{

    const [email,setEmail]= useState('')
    const [password,setPassword]= useState('')
    const [cp,setCp]= useState('')
    const [name,setName]= useState('')
    const [number,setNumber]= useState('')
    const [sName,setSname]= useState('')
    const [loading,setLoading]= useState(false)


    const createUser = async ()=>{

        if (password === cp) {
            await setDoc(doc(db, "Clients", email), {
                name: name,
                surname: sName,
                email: email,
                number: number
            });
        }
    }

    const handleSignUp= async ()=>{
        if (email && password) {
            try {

                if (name.length===0||sName.length===0||email.length===0||number.length===0) {
                    alert("All fields must be filled")
                }

                if (number.length != 10) {
                    alert("number must be 10 digits long")
                }

                await createUserWithEmailAndPassword(auth,email,password)
                await setDoc(doc(db, "Clients", email), {
                    name: name,
                    surname: sName,
                    email: email,
                    number: number
                });

            } catch (error) {
                alert(error.message)
            }
        }
        
    }
return(
    <SafeAreaView style={{flex:1, justifyContent:'center'}}>
        <View style={{paddingHorizontal:25}}>
            <View style={{alignItems:'center'}}>
                {/* <Image source={require('./src/assets/logo.png')} style={{width:300,height:150}} /> */}
            </View>
            <Text style={{fontSize:28, fontWeight:'500', marginBottom:30,color:'#333'}}>Register</Text>
            <View style={{flexDirection:'row', borderBottomColor:'#ccc',borderBottomWidth:1,paddingBottom:8,marginBottom:25}}>
                <AntDesign name="mail" size={20} color={'#666'} style={{marginRight:5}}/>
                <TextInput onChangeText={(text)=>{setEmail(text)}} placeholder="Email" style={{flex:1,paddingVertical:0}} keyboardType="email-address"/>
            </View>
            <View style={{flexDirection:'row', borderBottomColor:'#ccc',borderBottomWidth:1,paddingBottom:8,marginBottom:25}}>
                <AntDesign name="mobile1" size={20} color={'#666'} style={{marginRight:5}}/>
                <TextInput onChangeText={(text)=>{setNumber(text)}} placeholder="Phone Number" style={{flex:1,paddingVertical:0}} />
            </View>
            <View style={{flexDirection:'row', borderBottomColor:'#ccc',borderBottomWidth:1,paddingBottom:8,marginBottom:25}}>
                <AntDesign name="lock1" size={20} color={'#666'} style={{marginRight:5}}/>
                <TextInput onChangeText={(text)=>{setPassword(text)}} placeholder="Password" style={{flex:1,paddingVertical:0}} secureTextEntry={true}/>
            </View>
            <View style={{flexDirection:'row', borderBottomColor:'#ccc',borderBottomWidth:1,paddingBottom:8,marginBottom:25}}>
                <AntDesign name="lock1" size={20} color={'#666'} style={{marginRight:5}}/>
                <TextInput onChangeText={(text)=>{setCp(text)}} placeholder="Confirm password" style={{flex:1,paddingVertical:0}} secureTextEntry={true}/>
            </View>
            <View style={{flexDirection:'row', borderBottomColor:'#ccc',borderBottomWidth:1,paddingBottom:8,marginBottom:25}}>
                <AntDesign name="lock1" size={20} color={'#666'} style={{marginRight:5}}/>
                <TextInput onChangeText={(text)=>{setName(text)}} placeholder="Name" style={{flex:1,paddingVertical:0}} />
            </View>
            <View style={{flexDirection:'row', borderBottomColor:'#ccc',borderBottomWidth:1,paddingBottom:8,marginBottom:25}}>
                <AntDesign name="lock1" size={20} color={'#666'} style={{marginRight:5}}/>
                <TextInput onChangeText={(text)=>{setSname(text)}} placeholder="Surname" style={{flex:1,paddingVertical:0}} />
            </View>

            <TouchableOpacity onPress={()=>{handleSignUp()}} style={{backgroundColor:'#FFEA00',padding:20,borderRadius:10,marginBottom:20}}>
                <Text style={{textAlign:'center',fontWeight:'700',fontSize:16,color:'#fff'}}>
                    Register
                </Text>
            </TouchableOpacity>
            <View>
                <Text style={{color:'#000', fontWeight:'700'}}>Already registered?</Text>
                <TouchableOpacity onPress={()=>{navigation.goBack()}}><Text style={{color:"#AD40AF", fontWeight:'700'}}> Login</Text></TouchableOpacity>
            </View>

        </View>
    </SafeAreaView>
)
}

export default RegisterScreen 