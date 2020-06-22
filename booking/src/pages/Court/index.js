import React, {Component} from 'react';
import {ButtonGroup} from 'react-native-elements';
import {Alert} from 'react-native';
import { View, Text,TouchableOpacity, TextInput, StyleSheet, Image} from 'react-native';


class Style extends Component {
    constructor(props) {
      super(props)
      this.state = {
        select: 0
      }
      this.selectType = this.selectType.bind(this)
    }
    selectType = (newselectType) => {
      this.setState ({ select: newselectType})
    }
    render() {
      const button = ['10:00','11:00','12:00','13:00',
                      '14:00','15:00','16:00','17:00',
                      '18:00','19:00','20:00','21:00']
      const {selectedIndex} = this.state
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
                    <Text style={styles.textlapa}>Lapangan A</Text>
                    <Image 
                      style={styles.lapangan}
                      source={require ('../Images/lapangan.png')}
                      />
                      <Text style={styles.textlapa1}>Lapangan B</Text>
                      <Image 
                      style={styles.lapangan}
                      source={require ('../Images/lapangan.png')}
                      />
                    <ButtonGroup
                      onPress={this.selectType}
                      selectedIndex = {this.state.select}
                      buttons = {button}
                      containerStyle = {{height: 50, paddingLeft: 89}}/>
                </View>

                <View style={styles.lap2}>
                <Text style={styles.textlap1}>
                    Lapangan Futsal Tifosi</Text>
                    <Text style={styles.textlap11}>
                    Jl. Raden Inten II No.A30-31, RT.1/RW.5, Duren Sawit</Text>
                    <Text style={styles.textlapa}>Lapangan A</Text>
                    <Image 
                      style={styles.lapangan}
                      source={require ('../Images/lapangan.png')}
                      />
                </View>
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
      height : 65,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      flexDirection: 'column',
      
    },
    bottom:{
      paddingTop : 40
      
    },
    court0:{
      width : 414,
      height : 70,
      flexDirection : 'row',
      backgroundColor: '#FFFFFF',
      borderWidth :1
      
      
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
    textlapa:{
      fontSize: 12,
      fontFamily: 'robotot',
      marginTop : 15,
      color: 'red',
      paddingLeft: 33
  },
  textlapa1:{
    fontSize: 12,
    fontFamily: 'robotot',
    marginTop : 15,
    color: 'red',
    paddingLeft: 33
},
    lapangan:{
      width : 125,
      height : 72,
      marginTop : 5,
    }
  });