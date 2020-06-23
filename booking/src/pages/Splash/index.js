import React, { useEffect } from 'react';

import { View, Text, StyleSheet, ImageBackground, Image} from 'react-native';

const Splash = ({navigation}) => {
    useEffect(()=>{
        setTimeout(()=>{
            navigation.replace('Court');
        }, 2000)
    })
    return (

        <ImageBackground style={styles.bg}
        source={require ('../Images/background.png')}
        >
            <View style={styles.logo}>
            <   Image
                      source={require ('../Images/logo.png')}
                      />
            </View>
        </ImageBackground>
    );
};

export default Splash;

const styles = StyleSheet.create({
    bg:{
        width : '100%',
        height : '100%'
      },
    logo:{
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
    }
});
