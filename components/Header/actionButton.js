import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { View, Text, Pressable, Clipboard } from "react-native";
import { styles } from "./styles";
import { textStyles } from "../config/textStyles";

export const ActionButton = ({ title, content }) => {
  const [state, setState] = useState(true);
  const [isEmailVisible, setIsEmailVisible] = useState(false);

  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0.5,
    config: { duration: 500 },
  });

  const AnimatedView = animated(View);

  const _onPress = () => {
    setState(!state);
    setIsEmailVisible(!isEmailVisible);
    Clipboard.setString(content);
  };

  return (
    <>
      {isEmailVisible ? (
        <AnimatedView
          style={{
            opacity: x.to({ range: [0, 1], output: [0.3, 1] }),
            scale: x.to({
              range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
              output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
            }),
          }}
        >
          <Text style={textStyles.menuItem.default}>{content}</Text>
        </AnimatedView>
      ) : (
        <Pressable style={styles.button} onPress={_onPress}>
          <Text style={textStyles.menuItem.default}>{title}</Text>
        </Pressable>
      )}
    </>
  );
};
