import React, { useEffect, useState } from "react";
import {View, Text, StyleSheet, ImageBackground, Pressable, Button } from 'react-native';
import { Icon } from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const Recomendations = ({allRecomendations}) => {

    const navigation = useNavigation();

    return (
        <View style={styles.recomendations}>
                {
                    allRecomendations.map((data) => (
                        <View style={styles.recomendation} key={data._id}>
                            <View style={styles.imageView}>
                                <ImageBackground
                                source={require('../public/imgs/main-photo.jpg')}
                                style={styles.image} 
                                resizeMode="cover"
                                >

                                </ImageBackground>
                            </View>
                            <View style={styles.recomendationText}>
                                <Text style={styles.recomendationTitle}>{data.recomendationName}</Text>
                                <Text style={styles.recomendationDescription}>{data.recomendationDescription}</Text>
                                <Pressable style={styles.button} onPress={() => navigation.navigate('Recomendation', {"id": data._id})}>
                                    <Text style={styles.buttonText}>See more</Text>
                                </Pressable>
                            </View>
                        </View>
                    ))
                }
        </View>
    )
}

export default Recomendations;

const styles = StyleSheet.create({
    recomendations: {
        alignItems: "center",
        marginBottom: 100,  
    }, 

    recomendation: {
        marginTop: 20,
        marginBottom: 20,
        width: '90%',
        height: 350,
        elevation: 3,
        shadowColor: 'black',
    },

    imageView: {
        height: 160,
        alignSelf: 'stretch',
    },

    image: {
        flex: 1,
    },

    recomendationText: {
        height: 190,
        backgroundColor: "white"
    },

    recomendationTitle: {
        textTransform: "uppercase",
        fontWeight: "bold",
        fontSize: 20,
        marginLeft: 15,
        marginTop: 20,
    },

    recomendationDescription: {
        width: 300,
        fontWeight: "bold",
        opacity: 0.4,
        fontSize: 16,
        marginLeft: 15,
        marginTop: 20,
        marginBottom: 30
    },

    button: {
        marginLeft: 15,
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