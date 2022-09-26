import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { View, Text, Pressable, Clipboard } from "react-native";
import { styles } from "./styles";
import { textStyles, constants } from "..";
import Image from "next/image";
import { TouchableOpacity } from "react-native-web";

export const HeaderButton = () => {
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
    Clipboard.setString(constants.socials.Email);
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
          <TouchableOpacity style={{ flexDirection: "row" }} onPress={_onPress}>
            <Text style={textStyles.menuItem.default}>
              {constants.socials.Email}
            </Text>
            <View style={{ marginStart: 4, marginBottom: 4 }}>
              <Image src="/assets/clipboard-icon.svg" width={15} height={18} />
            </View>
          </TouchableOpacity>
        </AnimatedView>
      ) : (
        <Pressable style={styles.button} onPress={_onPress}>
          <Text style={textStyles.menuItem.default}>Contact</Text>
        </Pressable>
      )}
    </>
  );
};
