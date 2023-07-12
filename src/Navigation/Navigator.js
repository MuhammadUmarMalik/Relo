import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as Animatable from "react-native-animatable";
// import routes
import Reloador from "../Screen/Reloador";
import ScreenOn from "../Screen/ScreenOn";
import TouchBlocker from "../Screen/TouchBlocker";
import SplitScreen from '../Screen/SplitScreen'

const Navigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer
      style={{ flex: 1, justifyContent: "flex-end" }}
      screenOptions={{ headerShown: false }}
    >

      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Reloador") {
              iconName = focused ? "refresh-circle" : "refresh-circle-outline";
            } else if (route.name === "ScreenOn") {
              iconName = focused ? "sunny" : "sunny-outline";
            } else if (route.name === "TouchBlocker") {
              iconName = focused ? "lock-closed" : "lock-closed-outline";
            }
            else if(route.name=== "SplitScreen"){
              iconName=focused?"albums":"albums-outline"
            }

            return <Ionicons name={iconName} size={34} color={color} />;
          },
          tabBarActiveTintColor: '#1dbf73',
          tabBarInactiveTintColor: 'gray',
          tabBarLabelStyle: {
            display: "none", // Hide tab bar labels
          }, // Hide tab bar labels
        })}
      >
        <Tab.Screen name="Reloador"  component={Reloador} options={{headerShown:false}} />
        <Tab.Screen name="ScreenOn" component={ScreenOn} options={{headerShown:false}}/>
        <Tab.Screen name="TouchBlocker" component={TouchBlocker} options={{headerShown:false}} />
        <Tab.Screen name="SplitScreen" component={SplitScreen} options={{headerShown:false}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
