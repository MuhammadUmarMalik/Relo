import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './src/Navigation/Navigator';
import React from "react";
import Splash from './src/Screen/Splash';
export default function App() {
  const [appInitialized, setAppInitialized] = React.useState(false);

  React.useEffect(() => {
    // Perform any app initialization logic here
    // For example, you can fetch data, check authentication, etc.

    // Simulate an asynchronous initialization process
    setTimeout(() => {
      setAppInitialized(true);
    }, 3000); // 3 seconds delay
  }, []);

  if (!appInitialized) {
    // Show the splash screen until the app is initialized
    return <Splash />;
  }

  return (
    <View style={{flex:1,justifyContent:'center'}}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      
      <StatusBar  backgroundColor={"#1dbf73"}
        barStyle={"dark-content"}
        translucent={false} />
        <Navigator/>
    </View>
  );
}

