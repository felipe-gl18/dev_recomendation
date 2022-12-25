import React, {useState, useEffect} from "react";
import {ImageBackground, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import Recomendations from "./recomendation";
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = () => {

  const [allRecomendations, setAllRecomendations] = useState([]);
  const [searchedRecomendation, setSearchedRecomendation] = useState();

  useEffect(() => {
    fetch(`https://devrecomendation-backend.herokuapp.com/recomendations/allData`)
    .then((res) => res.json())
    .then((json) => {
       setAllRecomendations(json)
    })
  }, [])

  function handleSearchedRecomendation(newText){
    fetch(`https://devrecomendation-backend.herokuapp.com/recomendations/allData/${newText}`)
    .then((res) => res.json())
    .then((json) => {
       setAllRecomendations(json)
    })
    setSearchedRecomendation(newText);
  }

  return (
        
        <ScrollView style={styles.container}>
            <Text style={styles.title}>
                <Text style={styles.strong}>DEV </Text> 
                RECOMENDATION
            </Text>

            <View style={styles.main}>
                <ImageBackground 
                    source={require('../public/imgs/main-photo.png')}
                    style={styles.image} 
                    resizeMode="cover"
                >

                <Text style={styles.mainTtext}>Here you can find out where and how to <Text style={styles.strong}>access the best contents</Text> for developers</Text>
        
                </ImageBackground>
            </View>

            <TextInput style={styles.textInput} placeholder='Search recomendations' onChangeText={(newText) => handleSearchedRecomendation(newText)}/>
            <Icon name="search" style={styles.search} />

            <Recomendations 
              allRecomendations={allRecomendations}
            />
    </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
    },
  
    title: {
      alignSelf: "center",
      fontWeight: "bold",
      fontSize: 23,
      marginTop: 120,
      marginBottom: 120,
    },
  
    strong: {
      color: "#15C6DE",
      fontWeight: "bold"
    },
  
    main: {
      justifyContent: "center",
      height: 280,
      alignSelf: "stretch",
    },
  
    mainTtext: {
      marginLeft: 30,
      textTransform: "uppercase",
      color: "white",
      width: 200,
      fontSize: 17
    },
  
    image: {
      flex: 1,
      justifyContent: "center",
    },
  
    textInput: {
      alignSelf: "center",
      height: 50,
      width: 320,
      padding: 15,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 70,
      marginTop: 70,
    },
  
    search: {
      position: 'absolute',
      top: 630,
      right: 90,
      fontSize: 20,
      
    },
    navBar: {
      height: 60,
      alignItems: 'center',
      justifyContent: 'space-evenly',
      flexDirection: 'row',
      backgroundColor: 'white',
    },
    socialItem: {
      textAlign: 'center',
      alignItems: 'center',
      fontSize: 18,
      width: 100,
      lineHeight: 60
    }
  
  });
  

export default Home;