import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { textStyles } from "../config/textStyles";
import Image from "next/image";
import { usePlatform } from "../../hooks";

export const HomeHero = () => {
  const { isMobile } = usePlatform();

  return (
    <>
      {isMobile ? (
        <View></View>
      ) : (
        <View style={styles.container} accessibilityRole="link" href={`/about`}>
          <View style={styles.contentStart}>
            <Image src="/assets/author.svg" width={100} height={100} />
          </View>

          <View style={styles.contentEnd}>
            <Text style={textStyles.h3}>Hi, I’m Elene 👋</Text>
            <Text style={textStyles.subtitle}>
              Google certified UX/UI Designer with a mission to create
              delightful experiences and lovable products!
            </Text>
          </View>
        </View>
      )}
    </>
  );
};
