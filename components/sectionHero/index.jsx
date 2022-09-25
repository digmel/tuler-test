import React from "react";
import { View, Text, Linking } from "react-native";
import Image from "next/image";
import { Colors, Button } from "..";

export const SectionHero = ({ isMobile, link, image, headline, label }) => {
  const openURL = async () => {
    await Linking.openURL(link);
  };
  const imageWidth = isMobile ? 300 : 900;
  const imageHeight = isMobile ? 200 : 500;

  const containerStyle = {
    flexDirection: isMobile ? "column-reverse" : "row",
    marginBottom: isMobile ? 24 : 64,
  };

  const contentStyle = {
    flex: 1,
    alignItems: isMobile ? "center" : "flex-start",
    justifyContent: "center",
  };

  const imageContainer = {
    flex: 1,
    justifyContent: "center",
    // alignItems: "flex-end",
  };

  const headlineStyle = {
    fontSize: isMobile ? 20 : 48,
    lineHeight: "130%",
    fontWeight: 700,
    color: Colors.primary,
    fontFamily: "Poppins",
  };

  const labelStyle = {
    fontSize: isMobile ? 16 : 24,
    lineHeight: "130%",
    fontWeight: 300,
    color: Colors.primary,
    fontFamily: "Poppins",
    paddingTop: isMobile ? 8 : 16,
    textAlign: isMobile ? "center" : "auto",
  };

  const mobileFlag = isMobile ? "" : "-large";

  return (
    <View style={containerStyle}>
      <View style={contentStyle}>
        <Text style={headlineStyle}>{headline}</Text>
        <Text style={labelStyle}>{label}</Text>

        <Button
          isMobile={isMobile}
          topSpace={isMobile ? 24 : 42}
          label="View Prototype"
          onPress={openURL}
        />
      </View>

      <View style={imageContainer}>
        <Image
          src={`/assets/${image}${mobileFlag}.png`}
          width={imageWidth}
          height={imageHeight}
        />
      </View>
    </View>
  );
};
