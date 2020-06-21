import React, {Component} from 'react';
import { View, Text,TouchableOpacity, TextInput, StyleSheet} from 'react-native';




class Style extends Component {
    render() {
      return (
    
            <View style={styles.container}>
                <View style={styles.court}>
                    <Text style={styles.court1}>Court</Text>
                </View>

                <View style={styles.lap1}>
                    <Text style={styles.textlap1}>
                    Lapangan Futsal Tifosi</Text>
                    <Text style={styles.textlap11}>
                    Jl. Raden Inten II No.A30-31, RT.1/RW.5, Duren Sawit</Text>
                </View>

                <View style={styles.lap2}>
                <Text style={styles.textlap1}>
                    Lapangan Futsal Tifosi</Text>
                    <Text style={styles.textlap11}>
                    Jl. Raden Inten II No.A30-31, RT.1/RW.5, Duren Sawit</Text>
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
      height : 65,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      flexDirection: 'column',
      
    },
    court1:{
        fontSize : 30
    },
    lap1:{
      flexDirection: 'column',
      width: 320,
      height:282,
      padding:10,
      
      backgroundColor: '#FFFFFF',
      flexDirection: 'column',
      borderRadius:10,
      marginTop: 10
    },
    lap2:{
      flexDirection: 'column',
      width: 320,
      height:180,
      padding:10,
      
      backgroundColor: '#FFFFFF',
      flexDirection: 'column',
      borderRadius:10,
      marginTop: 10
    },
    textlap1:{
      fontSize: 12,
      color: '#C0121A',
      justifyContent: 'center',
      paddingLeft: 85
    },
    textlap11:{
        fontSize: 8,
        fontFamily: 'robotot',
        color: 'black',
        paddingLeft: 50
    },
  });