import React from "react";
import {View, Text, StyleSheet, ImageBackground, Linking} from 'react-native';
import  Icon from "react-native-vector-icons/FontAwesome";

const About = ({navigation}) => {
    return (
        <ImageBackground
                source={require('../public/imgs/main-photo-about.jpg')}
                style={styles.image}
                resizeMode="cover"
        >

            <View style={styles.about}>
                <View style={styles.aboutContent}>
                    <Text style={styles.name}>
                        Felipe Gadelha Lino
                    </Text>
                    <View style={styles.midlle}>
                        <Text style={styles.aboutDescription}>
                            Sou um programador Full Stack Júnior, e construí esse site para
                            botar em prática tudo que aprendi sobre Node.js, mas pretendo
                            dar continuação ao projeto, até porque, saber por onde começar
                            foi uma das minhas grandes dificuldades quando iniciei meus
                            estudos na área. Caso queira entrar em contato, só escolher uma
                            das opções abaixo.
                        </Text>
                    </View>
                    <View style={styles.social}>
                        <Icon name="facebook" style={styles.socialItem} onPress={() => Linking.openURL('https://www.facebook.com/felipe.lino.7902/')} />
                        <Icon name="instagram" style={styles.socialItem} onPress={() => Linking.openURL('https://www.instagram.com/jslearning.js/')}  />
                        <Icon name="whatsapp" style={styles.socialItem} onPress={() => Linking.openURL('https://wa.me/5588992048450/')} />
                    </View>
                </View>
            </View>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    about: {
        alignItems: 'center',
        width: '90%',
        height: '100%',
    },
    
    image: {
        alignItems: 'center',
        alignSelf: 'stretch'
    },

    aboutContent: {
        width: '90%',
    },

    name: {
        color: "#15C6DE",
        marginBottom: 60,
        marginTop: 50,
        textTransform: 'uppercase',
        fontSize: 22,
        fontWeight: 'bold'
    },

    midlle: {

    },

    aboutDescription: {
        color: 'white',
        fontSize: 16,
    },

    profile: {

    },

    social: {
        marginTop: 50,
        flexDirection: "row",
        width: 120,
        justifyContent: 'space-between',
    },

    socialItem: {
        color: 'white',
        fontSize: 24,
    }

});

export default About;