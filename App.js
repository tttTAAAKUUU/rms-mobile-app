import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LaunchScreen from './src/screens/LaunchScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import RequestScreen from './src/screens/RequestScreen';
import SlotsScreen from './src/screens/SlotsScreen';
import Srep from './src/screens/Srep';
import Frep from './src/screens/Frep';
import AdLI from './src/screens/AdLI';
import Admin from './src/screens/Admin';
import Lrep from './src/screens/Lrep';
import Serep from './src/screens/Serep';
import SpecialistLog from './src/screens/SpecialistLog';
import ManSlots from './src/screens/ManSlots';
import SpecHome from './src/screens/SpecHome';
import SpecPro from './src/screens/SpecPro';
import SpecRequests from './src/screens/SpecRequests';
import CreateSpec from './src/screens/CreateSpec';

const Stack = createNativeStackNavigator()
const UserStack = createNativeStackNavigator()


export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen component={LaunchScreen} name= 'launch' options={{headerShown:false}}/>
      <Stack.Screen component={HomeScreen} name= 'Home' options={{headerShown:false}}/>
      <Stack.Screen component={ProfileScreen} name= 'Profile' options={{headerShown:false}}/>
      <Stack.Screen component={RequestScreen} name= 'Request' options={{headerShown:false}}/>
      <Stack.Screen component={SlotsScreen} name= 'Slots'options={{headerShown:false}}/>
        <Stack.Screen component={LaunchScreen} name= 'Launch' options={{headerShown:false}}/>
        <Stack.Screen component={LoginScreen} name= 'Login' options={{headerShown:false}}/>
        <Stack.Screen component={RegisterScreen} name= 'Register' options={{headerShown:false}}/>
        <Stack.Screen component={Srep} name= 'srep'options={{headerShown:false}}/>
        <Stack.Screen component={Frep} name= 'frep' options={{headerShown:false}}/>
        <Stack.Screen component={Serep} name= 'serep' options={{headerShown:false}}/>
        <Stack.Screen component={Lrep} name= 'lrep' options={{headerShown:false}}/>
        <Stack.Screen component={AdLI} name= 'adlog' options={{headerShown:false}}/>
        <Stack.Screen component={Admin} name= 'admin' options={{headerShown:false}}/>
        <Stack.Screen component={SpecialistLog} name= 'specLog' options={{headerShown:false}}/>
        <Stack.Screen component={ManSlots} name= 'mans' options={{headerShown:false}}/>
        <Stack.Screen component={SpecHome} name= 'spechome' options={{headerShown:false}}/>
        <Stack.Screen component={SpecPro} name= 'specpro' options={{headerShown:false}}/>
        <Stack.Screen component={SpecRequests} name= 'specreq' options={{headerShown:false}}/>
        <Stack.Screen component={CreateSpec} name= 'crespec' options={{headerShown:false}}/>
        <Stack.Screen component={SpecialistLog} name= 'speclog' options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
;
