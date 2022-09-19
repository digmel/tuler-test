import React from "react";
import { View, Text, Linking, Pressable } from "react-native";
import { textStyles } from "../config/textStyles";
import { styles } from "./styles";
import Image from "next/image";
import { usePlatform } from "../../hooks";

const linkedinLink = "https://www.linkedin.com/in/elene-zed/";
const twitterLink = "https://twitter.com/EleneZed";

export const Footer = () => {
  const { isMobile } = usePlatform();

  const _openLinkedin = async () => {
    await Linking.openURL(linkedinLink);
  };

  const _openTwitter = async () => {
    await Linking.openURL(twitterLink);
  };

  return (
    <View style={styles.container}>
      {isMobile ? (
        <View></View>
      ) : (
        <>
          <View style={styles.leftContainer}>
            <Pressable style={styles.icon} onPress={_openLinkedin}>
              <Image
                src="/assets/linkedin.svg"
                width={40}
                height={40}
                alt="Linkedin icon"
              />
            </Pressable>

            <Pressable style={styles.icon} onPress={_openTwitter}>
              <Image
                src="/assets/twitter.svg"
                width={40}
                height={40}
                alt="Twitter icon"
              />
            </Pressable>
          </View>
          <View style={styles.rightContainer}>
            <Text style={textStyles.body}>
              Copyright © 2022 Elene Zedginidze.
            </Text>
            <Text style={textStyles.body}>All rights reserved.</Text>
          </View>
        </>
      )}
    </View>
  );
};
