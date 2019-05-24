import {
    createAppContainer,
    createStackNavigator,
    createSwitchNavigator
        } from 'react-native';

import Login from './pages/login';

const AuthStack = createStackNavigator(
    {Login,
    Listagem},
    
    {initialRoute: "Login"}
)