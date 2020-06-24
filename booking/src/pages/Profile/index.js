import React, {Component} from 'react';
import { View,Button, Text,TouchableOpacity, TextInput, StyleSheet, Image} from 'react-native';


class Style extends Component {
    render() {
      return (
            <View style={styles.container}>
                <View style={styles.court}>
                    <Text style={styles.court1}>Profile</Text>
                </View>
                <View style={styles.profile}>
                <Text style={{fontSize:20,bottom:10}}>Email            :</Text>
                <Text style={{fontSize:20}}>Username    :</Text>
                 </View>
                 
                 <TouchableOpacity style={styles.buttonStyle}>
                        <Text style={styles.textSignup}>Log Out</Text>
                     </TouchableOpacity>

                <View style={styles.bottom}/>
                <View style={styles.court0}>
                    <View style={{ flex : 1, alignItems:'center', justifyContent: 'center'}}>
                    <Image 
                      source={require ('../Images/pilihan.png')}
                      />
                      <Text>Court</Text>
                      
                    </View>
                    <View style={{flex:1,borderLeftWidth:1, alignItems:'center', justifyContent: 'center'}}>
                    <Image 
                      source={require ('../Images/user.png')}
                      />
                      <Text>Profile</Text>
                    </View>
            </View>
        </View>
    );
  }
}

export default Style;

const styles = StyleSheet.create({
    container: {
        
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F6F6F6',
        flexDirection: 'column'
    },
    court:{
      flexDirection: 'column',
      width : 410,
      height : 75,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      flexDirection: 'column',
      borderWidth:1
    },
    bottom:{
      paddingBottom:398
    },
    profile:{
        paddingTop:20,
        right:130
    },
    court0:{
      width : 414,
      height : 70,
      flexDirection : 'row',
      backgroundColor: '#FFFFFF',
      borderWidth:1
      
    },
    court1:{
        fontSize : 30
    },
    buttonStyle:{
        backgroundColor:'red',
        paddingLeft:10,
        paddingRight:10,
        flexDirection:'row',
        justifyContent: 'space-between',
        marginTop:10,
        width:100,
        height:30,
        borderRadius:8,
        top:30
      },
      textSignup: {
        fontSize: 16,
        textAlign: 'center',
        alignItems: 'center',
        flexDirection:'row',
        justifyContent: 'space-between',
        margin: 3,
        width: 70,
        height: 23,
        color:'#ffffff',
        borderRadius: 20
        
      },
});