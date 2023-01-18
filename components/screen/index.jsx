import React from "react";
import { View } from "react-native";
import { AnimatedView } from "..";

export const Screen = ({ children, isMobile }) => {
  const contentStyle = {
    flex: 1,
    paddingHorizontal: isMobile ? 32 : 120,
    paddingBottom: isMobile ? 100 : 300,
    paddingTop: isMobile ? 32 : 50,
  };

  return (
    <View style={{ flex: 1 }}>
      <AnimatedView>
        <View style={contentStyle}>{children}</View>
      </AnimatedView>
    </View>
  );
};
