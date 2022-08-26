import React from "react";
import { View, Text } from "react-native";
import { textStyles } from "../config/textStyles";
import { styles } from "./styles";

export const Footer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.title}>Home</Text>
        <Text style={styles.title}>Projects</Text>
        <Text style={styles.title}>About</Text>
      </View>
      <View style={styles.rightContainer}>
        <Text style={textStyles.body}>Copyright © 2022 Elene Zedginidze.</Text>
        <Text style={textStyles.body}>All rights reserved.</Text>
      </View>
    </View>
  );
};
