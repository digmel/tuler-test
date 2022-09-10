import React from "react";
import { Text, Pressable } from "react-native";
import { styles } from "./styles";
import { textStyles } from "../config/textStyles";

export const Button = ({ label, onPress, topSpace, bottomSpace }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        { marginTop: topSpace, marginBottom: bottomSpace },
      ]}
    >
      <Text style={textStyles.button}>{label}</Text>
    </Pressable>
  );
};
