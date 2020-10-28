import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer'

import Screen from '../../Screen/index'
import Icons from '../../Assets/Icons';
import colors from '../../Assets/colors'
import Header from '../../Components/Header/Header'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();
function OrdersType() {
  return (
    <TopTab.Navigator

    >
      {/* <Header name="lskd" /> */}
      <TopTab.Screen name="الطلبات المرفوضة" component={Screen.Orders} />
      <TopTab.Screen name="الطلبات المنفذة" component={Screen.Orders} />
    </TopTab.Navigator>
  )
}
function Main() {
  return (
    <Tab.Navigator
      initialRouteName="المتاجر"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {

          if (route.name === 'المتاجر') {
            return Icons.Stores(focused ? color : colors.gray);
          } else if (route.name === 'التنبيهات') {
            return Icons.Attention(focused ? color : colors.gray);
          } else if (route.name === 'الطلبات') {
            return Icons.Orders(focused ? color : colors.gray);
          } else {
            return Icons.Person(focused ? color : colors.gray);
          }

          // You can return any component that you like here!
          return null;
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.blue,
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="الرئسية" component={Screen.Home} options={{ tabBarBadge: 3 }} />

      <Tab.Screen name="الطلبات" component={OrdersType} />

      {/* <Tab.Screen name="التنبيهات" component={Screen.Notification} options={{ tabBarBadge: 3 }} /> */}
    </Tab.Navigator>
  )
}

function PersonalDrawer() {
  return (
    <Drawer.Navigator
      drawerPosition="right"
      drawerContent={(props) => (
        <Screen.Personal {...props} />
      )}

    >
      {/* <Header name="lskd" /> */}
      <Drawer.Screen name="home" component={Main} />
    </Drawer.Navigator>
  )
}
function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'
        headerMode="none"
        animationTypeForReplace="pop"
      >
        {/* <Stack.Screen name='login' component={Screen.Login} /> */}
        <Stack.Screen name="main" component={PersonalDrawer} />
        <Stack.Screen name="Location" component={Screen.SelectLocation} />
        <Stack.Screen name='Check'
          component={Screen.Verification}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>

    </NavigationContainer>
  )
}


export default MainStackNavigator



