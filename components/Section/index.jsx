import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { textStyles } from "../config/textStyles";
import Image from "next/image";

export const Section = ({ title, text, width }) => {
  const _underlineWidth = title.length * 14;
  const _underlineHeight = 6;

  return (
    <View style={[styles.container, { width }]}>
      <Text style={textStyles.title}>{title}</Text>

      <View style={styles.underline}>
        <Image
          src="/assets/underline.svg"
          width={_underlineWidth}
          height={_underlineHeight}
        />
      </View>

      <Text style={textStyles.body}>{text}</Text>
    </View>
  );
};
