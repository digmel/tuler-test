import React from "react";
import { Text, Pressable } from "react-native";
import { usePlatform } from "../../hooks";
import { Colors } from "..";

export const Button = ({ label, onPress, topSpace, bottomSpace }) => {
  const { isMobile } = usePlatform();

  const containerStyle = {
    paddingHorizontal: isMobile ? 16 : 32,
    paddingVertical: isMobile ? 8 : 16,
    backgroundColor: Colors.accent,
    borderRadius: 8,
    justifyContent: "center",
  };

  const textStyle = {
    fontSize: isMobile ? 24 : 32,
    lineHeight: "130%",
    fontWeight: 300,
    color: Colors.primary,
    fontFamily: "Poppins",
  };

  return (
    <Pressable
      onPress={onPress}
      style={[
        containerStyle,
        { marginTop: topSpace, marginBottom: bottomSpace },
      ]}
    >
      <Text style={textStyle}>{label}</Text>
    </Pressable>
  );
};
