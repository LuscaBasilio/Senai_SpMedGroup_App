import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, AsyncStorage} from 'react-native';
import api from './src/services/api';
import jwt from 'jwt-decode';


export default class Listagem extends Component {

    constructor(props){
        super(props);
        this.state={
            consultas:[],
            infosUser:[]
        }
    }

    

  render() {
    return (
      <View style={styles.container}>
        <View>
            <Text></Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
titles:{
  fontSize:30,
  color: 'cyan'
},
inputs:{
  marginTop: '10%',
  borderColor: '#82D98F',
  borderWidth: 1.5,
  width: "70%",
  marginLeft: "15%",
  backgroundColor: "transparent"
},
container:{
  textAlign: 'center',
  backgroundColor:'#ffffff',
  paddingVertical: 60,
  height: "100%"
},
button:{
  backgroundColor: "transparent",
  borderWidth:1,
  width: "30%",
  height: 40,
  borderColor: '#82D98F',
  marginTop: "10%",
  marginLeft: "35%"
},
buttonLogin:{
  color: "#82D98F",
  justifyContent:'center',
  letterSpacing: 2,
  textAlign: 'center',
  alignItems: 'center',
  paddingTop: 8
}
});
