import React, { useState } from "react";
import { TextInput, View, Text, StyleSheet, Pressable, ScrollView} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {IPV4_ADDRESS} from '@env';

export default function CreateRecomendation(){

    const navigation = useNavigation();

    const [recomendationName, setRecomendationName] = useState("");
    const [recomendationAuthor, setRecomendationAuthor] = useState("");
    const [recomendationDescription, setRecomendationDescription] = useState("");
    const [recomendationLink, setRecomendationLink] = useState("");

    function handleNewRecomendtion(){
        fetch(`http://${IPV4_ADDRESS}:8000/recomendations/creation`,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                recomendationName: recomendationName,
                recomendationDescription: recomendationDescription,
                recomendationLink: recomendationLink,
                recomendationAuthor: recomendationAuthor
             })
        })
        navigation.navigate('Home')
    }

    return(
        <ScrollView style={styles.container}>
            <Text style={styles.title}>
                <Text style={styles.strong}>DEV </Text> 
                RECOMENDATION
            </Text>
            <View>
                <TextInput style={styles.textInput} placeholder='Título da recomendação' onChangeText={(newText) => setRecomendationName(newText)} />
                <TextInput style={styles.textInput} placeholder='Seu nome' onChangeText={(newText) => setRecomendationAuthor(newText)} />
                <TextInput style={styles.textInput} placeholder='Descrição da recomendação' onChangeText={(newText) => setRecomendationDescription(newText)} />
                <TextInput style={styles.textInput} placeholder='Link do material' onChangeText={(newText) => setRecomendationLink(newText)}/>
                <Pressable style={styles.button} onPress={handleNewRecomendtion}>
                    <Text style={styles.buttonText}>Create</Text>
                </Pressable>
            </View>
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
        marginTop: 80,
        marginBottom: 60,
      },
    
      strong: {
        color: "#15C6DE",
        fontWeight: "bold"
      },

      textInput: {
        alignSelf: "center",
        height: 50,
        width: 320,
        padding: 15,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        marginTop: 10,
      },

      button: {
        marginLeft: 70,
        marginTop: 20,
        width: 160,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#15C6DE',
    }, 
    
    buttonText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "white"
    },
})