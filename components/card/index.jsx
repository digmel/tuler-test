import React from "react";
import { View, Text } from "react-native";
import Image from "next/image";
import { shadowStyle, Colors } from "..";

export const Card = ({ link, image, title, text, isMobile }) => {
  const containerStyle = {
    flex: 1,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 24,
    ...shadowStyle,
  };

  const imageStyle = {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: isMobile ? 12 : 24,
    backgroundColor: "gray",
  };

  const iconStyle = {
    paddingBottom: isMobile ? 8 : 16,
  };

  const bodyStyle = {
    fontSize: isMobile ? 14 : 16,
    lineHeight: "130%",
    fontWeight: 300,
    color: Colors.primary,
    fontFamily: "Poppins",
    textAlign: "center",
  };

  const titleStyle = {
    fontSize: isMobile ? 20 : 28,
    lineHeight: "130%",
    fontWeight: isMobile ? 600 : 500,
    color: Colors.primary,
    fontFamily: "Poppins",
  };

  const imageWith = isMobile ? 250 : 450;
  const imageHeight = isMobile ? 130 : 230;
  const rate = isMobile ? 13 : 20;
  const iconWidth = title ? title?.length * rate : 100;

  return (
    <>
      <View style={containerStyle} accessibilityRole="link" href={link}>
        <View style={imageStyle}>
          <Image
            src={`/assets/${image}`}
            width={imageWith}
            height={imageHeight}
          />
        </View>

        <Text style={titleStyle}>{title}</Text>

        <View style={iconStyle}>
          <Image src="/assets/card-divider.svg" width={iconWidth} height={5} />
        </View>

        <Text style={bodyStyle}>{text}</Text>
      </View>
    </>
  );
};
