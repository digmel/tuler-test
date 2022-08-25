import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

export const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>

      <Text style={styles.title}>Projects</Text>

      <Text style={styles.title}>About</Text>

      <Text style={styles.title}>elene.uxdesign@gmail.com</Text>
    </View>
  );
};
