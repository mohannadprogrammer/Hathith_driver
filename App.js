import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MainStackNavigator from './src/HOC/Navigation/MainStackNavigator';
import SplashScreen from 'react-native-splash-screen';
import StateProvider from './StateProvider'
export default class App extends Component {

  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
  }

  render() {
    return (
      // <View>
      //   <Text>mohannad</Text>
      // </View>
      <StateProvider>
        <MainStackNavigator />

      </StateProvider>
    )
  }
}
