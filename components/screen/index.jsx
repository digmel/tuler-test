import React from "react";
import { View } from "react-native";

export const Screen = ({ children, isMobile }) => {
  const contentStyle = {
    flex: 1,
    paddingHorizontal: isMobile ? 32 : 120,
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={contentStyle}>{children}</View>
    </View>
  );
};
