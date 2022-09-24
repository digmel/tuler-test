import React from "react";
import { Text, Pressable } from "react-native";
import { Colors } from "..";

export const Button = ({ label, onPress, topSpace, bottomSpace, isMobile }) => {
  const containerStyle = {
    paddingHorizontal: isMobile ? 16 : 32,
    paddingVertical: isMobile ? 8 : 16,
    backgroundColor: Colors.accent,
    borderRadius: 8,
    justifyContent: "center",
  };

  const labelStyle = {
    fontSize: isMobile ? 16 : 24,
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
      <Text style={labelStyle}>{label}</Text>
    </Pressable>
  );
};
