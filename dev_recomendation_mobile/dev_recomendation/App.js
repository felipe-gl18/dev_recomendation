import React from 'react';
import { StatusBar } from 'expo-status-bar';
import  Icon from "react-native-vector-icons/AntDesign";


import { ImageBackground, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';


import Home from './Components/home';
import About from './Components/about';
import NavBar from './Components/navBar';
import CreateRecomendation from './Components/createRecomendation';
import RecomendationPage from './Components/recomendationPage';

import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName='Home'>

        <Stack.Screen name='Home' component={Home} options={{ 
            title: 'HOME',
            headerTitleStyle: {
              fontSize: 15
            }
          }}
        />

        <Stack.Screen name='About' component={About} options={{
          title: 'ABOUT',
          headerTitleStyle: {
            fontSize: 15
          }
        }}/>

        <Stack.Screen name='CreateRecomendation' component={CreateRecomendation} options={{
          title: 'CREATE RECOMENDATION',
          headerTitleStyle: {
            fontSize: 15
          }
        }}/>

        <Stack.Screen name='Recomendation' component={RecomendationPage} options={{
          title: 'RECOMENDATION',
          headerTitleStyle: {
            fontSize: 15
          }
        }}/>

      </Stack.Navigator>
      <NavBar />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 23,
    marginTop: 100,
    marginBottom: 100,
  },

  strong: {
    color: "#15C6DE",
    fontWeight: "bold"
  },

})