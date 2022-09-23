import React from "react";
import { View } from "react-native";
import { useSpring, animated } from "@react-spring/web";

export const AnimatedView = ({ children }) => {
  const AnimatedView = animated(View);

  const transitionStyles = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return <AnimatedView style={transitionStyles}>{children}</AnimatedView>;
};
