import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { textStyles } from "../config/textStyles";
import Image from "next/image";

export const HomeHero = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentStart}>
        <Image src="/assets/hero.svg" width={150} height={150} />
      </View>

      <View style={styles.contentEnd}>
        <Text style={textStyles.h2}>Hi, I’m Elene 👋</Text>
        <Text style={textStyles.body}>
          Google certified UX/UI Designer with the mission to create delightful
          experiences and lovable products for people!
        </Text>
      </View>
    </View>
  );
};
