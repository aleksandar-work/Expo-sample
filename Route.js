import React, { Component } from "react";
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import theme from './Theme'
import GeneralStatusBarColor from './components/styles/GeneralStatusBarColor';
import NotificationBar from "./components/both/notification"
import Splash from './screens/both/Splash'
import * as NavigationService from './services/navigationService'
const Stack = createStackNavigator();
class Route extends Component {
  render() {
    const { notification, onResetNavigation } = this.props
    let notificiationProps
    if (notification)
      notificiationProps = Object.assign({}, notificiationProps, {
        type: notification.type,
        message: notification.message,
      })
    return (
      <View style={{ flex: 1 }}>
        <GeneralStatusBarColor backgroundColor={theme.StatusbarColor}
          barStyle={theme.StatusbarStyle} />
        <NavigationContainer
          ref={nav => NavigationService.setNavigator(nav)} >
          <Stack.Navigator
            initialRouteName="Splash"
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={Splash} options={{ gestureEnabled: false }} />
          </Stack.Navigator>
        </NavigationContainer>
        <NotificationBar onPress={onResetNavigation} {...notificiationProps} />
      </View>
    );
  }
}
export default Route
