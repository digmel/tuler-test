import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.title}>Hi, I’m Elene 👋</Text>
        <Text style={styles.subtitle}>
          Google certified UX/UI Designer with the mission to create delightful
          experiences and lovable products for people!
        </Text>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.imageContainer}>
          <Image
            src="/assets/hero.svg"
            width={364}
            height={364}
            alt="Author Image"
          />
        </View>
      </View>
    </View>
  );
};
