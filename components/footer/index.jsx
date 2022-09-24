import React from "react";
import { View, Text, Pressable, Linking } from "react-native";
import { Colors, constants } from "..";
import Image from "next/image";

export const Footer = ({ isMobile }) => {
  const openLinkedin = async () => {
    await Linking.openURL(constants.socials.Linkedin);
  };

  const containerStyle = {
    zIndex: 1,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Colors.grayLight,
    borderTopColor: Colors.gray,
    borderWidth: 1,
    justifyContent: isMobile ? "center" : "flex-start",
    paddingHorizontal: isMobile ? 35 : 120,
    paddingVertical: isMobile ? 36 : 24,
  };

  const contentStyle = {
    marginStart: 16,
    paddingStart: 16,
    borderLeftColor: Colors.grayDark,
    borderLeftWidth: 1.5,
  };

  const bodyStyle = {
    fontSize: isMobile ? 14 : 16,
    lineHeight: "130%",
    fontWeight: 300,
    color: Colors.primary,
    fontFamily: "Poppins",
  };

  return (
    <View style={containerStyle}>
      <Pressable onPress={openLinkedin}>
        <Image
          src="/assets/linkedin-icon.svg"
          width={40}
          height={40}
          alt="Linkedin icon"
        />
      </Pressable>

      <View style={contentStyle}>
        <Text style={bodyStyle}>Copyright © 2022 Elene Zedginidze.</Text>
        <Text style={bodyStyle}>All rights reserved.</Text>
      </View>
    </View>
  );
};
