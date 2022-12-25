import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ImageBackground, Pressable, Linking } from "react-native";

export default function RecomendationPage({ route }){

    const { id } = route.params;
    const [recomendation, setRecomendation] = useState([])

    useEffect(() => {
        fetch(`https://devrecomendation-backend.herokuapp.com/recomendations/${id}`)
        .then((res) => res.json())
        .then((json) => {
           setRecomendation(json)
        })
      })

    return(
        <ImageBackground
                source={require('../public/imgs/main-photo-about.jpg')}
                style={styles.image}
                resizeMode="cover"
        >

            <View style={styles.recomendation}>
                <View style={styles.recomendationContent}>
                    <Text style={styles.recomendationName}>
                        {recomendation.recomendationName}
                    </Text>
                    <View style={styles.midlle}>
                        <Text style={styles.recomendationDescription}>
                            {recomendation.recomendationDescription}
                        </Text>
                    </View>
                </View>
                <Pressable style={styles.button} onPress={() => Linking.openURL(recomendation.recomendationLink)}>
                    <Text style={styles.buttonText}>See more</Text>
                </Pressable>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    recomendation: {
        width: '90%',
        height: '100%',
    },
    
    image: {
        alignItems: 'center',
        alignSelf: 'stretch'
    },

    recomendationContent: {
        width: '90%',
    },

    recomendationName: {
        color: "#15C6DE",
        marginBottom: 60,
        marginTop: 50,
        textTransform: 'uppercase',
        fontSize: 22,
        fontWeight: 'bold'
    },

    midlle: {

    },

    recomendationDescription: {
        color: 'white',
        fontSize: 16,
    },

    button: {
        marginTop: 40,
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