import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, AsyncStorage, TextInput, TouchableOpacity} from 'react-native';
import api from './src/services/api';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state={email:'', senha:''}
  }

  _Login = async() =>{

  const response = await api.post('/Login/log', {
    email: this.state.email,
    senha: this.state.senha
  })

  token = response.data.token;
  await AsyncStorage.setItem('userToken', token);
  this.props.navigation.navigate('');
}

  render() {
    return (
      <View style={styles.container}>

        <Image source={require('./src/assets/img/LogoSp.png')} style={{width: 150, height: 150, marginLeft:"27%"}}/>

        <TextInput style={styles.inputs} 
        placeholderTextColor="#82D98F"
        placeholder="Email"
        onChangeText={email => this.setState({email})} />
        
        <TextInput style={styles.inputs}
        placeholderTextColor="#82D98F"
        placeholder="Senha"
        password='true'
        onChangeText={senha => this.setState({senha})} />

        <TouchableOpacity style={styles.button} onPress={this._Login()}>
          <Text style={styles.buttonLogin}>Login</Text>
        </TouchableOpacity>
        
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
