import React from "react";
import { View, StyleSheet} from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';

import { useNavigation } from "@react-navigation/native";

export default function NavBar(){

    const navigation = useNavigation();

    return(
        <View style={styles.navBar}>
              <Icon name="home" style={styles.socialItem} onPress={() => navigation.navigate('Home')}/>
              <Icon name="team" style={styles.socialItem} onPress={() => navigation.navigate('About')}/>
              <Icon name="plus" style={styles.socialItem} onPress={() => navigation.navigate('CreateRecomendation')}/>
        </View>
    );
}

const styles = StyleSheet.create({
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
})