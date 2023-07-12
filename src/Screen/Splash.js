import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Splash = () => {
  useEffect(() => {
    // Simulate a delay or any other initialization logic
    // For example, you can navigate to another screen after a certain duration
    setTimeout(() => {
      // Navigate to the main app screen
      // Replace "MainScreen" with your actual main screen component
      // navigation.navigate("MainScreen");
    }, 3000); // 3 seconds delay
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../Assets/Relo.png")} // Replace with your splash screen image
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>RELO</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 16,
  },
});

export default Splash;
