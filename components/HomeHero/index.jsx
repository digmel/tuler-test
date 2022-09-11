import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { textStyles } from "../config/textStyles";
import Image from "next/image";

export const HomeHero = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentStart}>
        <Image src="/assets/author.png" width={150} height={150} />
      </View>

      <View style={styles.contentEnd}>
        <Text style={textStyles.h3}>Hi, I’m Elene 👋</Text>
        <Text style={textStyles.subtitle}>
          Google certified UX/UI Designer with a mission to create delightful
          experiences and lovable products for people!
        </Text>
      </View>
    </View>
  );
};
