import React, {Component} from 'react';
import { View,onPress, Text,TouchableOpacity, TextInput, StyleSheet, Button, Alert} from 'react-native';
import { color } from 'react-native-reanimated';

    class Style extends Component {
      _onPressButton = () => {
        alert("Test")
      }
        render() {
          return (
        
                <View style={styles.container}>
                    <View style={styles.bgc}>
                    <Text style={styles.textLogin}>Login</Text>
           
                 <Text style={styles.username}>Username</Text>
                    <TextInput 
                    style={styles.textInput}
                 />
                 <Text style={styles.username}>Password</Text>
                    <TextInput 
                    secureTextEntry
                    style={[styles.textInput]}
                    
                />
                </View>
            
            <TouchableOpacity style={styles.buttonStyle}>
              <Text style={styles.textSignup}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle1} 
              onPress={this._onPressButton}>
            <Text style={styles.textSignup}>Register</Text>
            </TouchableOpacity>
          </View>
        );
      }
    }

export default Style;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F6F6F6',
        flexDirection: 'column'
    },
    bgc:{
      flexDirection: 'column',
      width: 240,
      height:194,
      padding:25,
      justifyContent: 'center',
      backgroundColor: '#FFFFFF',
      flexDirection: 'column',
      borderRadius:8

    },
    textInput:{
      fontSize : 9,
      height: 30,
      borderColor: '#707070',
      borderWidth: 1,
      color:'black',
      paddingLeft:10,
      paddingRight:10,
      marginBottom:10,
      width:190
    },
    username:{
        textAlign:'left',
        marginBottom: 1,
        marginTop: 4,
        color: 'black',
    },
    textLogin:{
        fontSize:25,
        marginBottom: 20,
        alignItems: 'center',
        color: 'black',
        textAlign:'center'
    },
    buttonStyle:{
      backgroundColor:'#35D283',
      paddingLeft:10,
      paddingRight:10,
      marginTop:10,
      width:100,
      height:30
    },
    buttonStyle1:{
        backgroundColor:'#FFBF00',
        paddingLeft:10,
        paddingRight:10,
        marginTop:10,
        width:100,
        height:30
    },
    textSignup: {
      fontSize: 16,
      textAlign: 'center',
      alignItems: 'center',
      margin: 3,
      width: 70,
      height: 23,
      color:'#ffffff',
      borderRadius: 20
      
    },
    instructions: {
      textAlign: 'center',
      color: 'black',
      marginBottom: 5,
      marginTop:10
    },
  });

