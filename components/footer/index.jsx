import React from "react";
import { usePlatform } from "../../hooks";
import { View, Text, Pressable, Linking } from "react-native";
import { textStyles } from "..";
import { styles } from "./styles";
import Image from "next/image";

const linkedinLink = "https://www.linkedin.com/in/elene-zed/";

export const Footer = () => {
  const { isMobile } = usePlatform();

  const openLinkedin = async () => {
    await Linking.openURL(linkedinLink);
  };

  const responsiveStyles = {
    justifyContent: isMobile ? "center" : "flex-start",
    paddingHorizontal: isMobile ? 35 : 120,
  };

  return (
    <View style={[styles.container, responsiveStyles]}>
      <Pressable onPress={openLinkedin}>
        <Image
          src="/assets/linkedin.svg"
          width={40}
          height={40}
          alt="Linkedin icon"
        />
      </Pressable>

      <View style={styles.copyrights}>
        <Text style={textStyles.body}>Copyright © 2022 Elene Zedginidze.</Text>
        <Text style={textStyles.body}>All rights reserved.</Text>
      </View>
    </View>
  );
};
