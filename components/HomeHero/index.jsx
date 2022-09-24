import React from "react";
import { View, Text } from "react-native";
import { shadowStyle as _shadowStyle, Colors, textStyles } from "..";
import Image from "next/image";
import { usePlatform } from "../../hooks";

export const HomeHero = () => {
  const { isMobile } = usePlatform();

  const containerStyle = {
    flex: 1,
    flexDirection: isMobile ? "column" : "row",
    justifyContent: "flex-start",
    alignItems: isMobile ? "flex-start" : "center",
    paddingVertical: isMobile ? 0 : 48,
    paddingStart: isMobile ? 0 : 32,
    marginBottom: 48,
  };

  const shadowStyle = isMobile ? {} : _shadowStyle;
  const mobileSubtitle = isMobile
    ? {
        fontSize: 20,
        fontWeight: 300,
        color: Colors.primary,
        lineHeight: "130%",
        fontFamily: "Poppins",
        paddingTop: 16,
      }
    : {};

  const imageStyle = {
    alignItems: isMobile ? "center" : "flex-start",
    justifyContent: "flex-start",
    paddingRight: isMobile ? 0 : 24,
    flexDirection: isMobile ? "row" : "column",
    marginTop: isMobile ? -64 : 0,
  };

  const contentStyle = {
    flex: 1,
  };

  return (
    <View
      style={[containerStyle, shadowStyle]}
      accessibilityRole="link"
      href={`/about`}
    >
      <View style={imageStyle}>
        <Image src="/assets/author.svg" width={100} height={100} />
        {isMobile && (
          <Text style={[textStyles.h3, { marginStart: 16 }]}>
            Hi, I’m Elene 👋
          </Text>
        )}
      </View>

      <View style={contentStyle}>
        {!isMobile && <Text style={textStyles.h3}>Hi, I’m Elene 👋</Text>}
        <Text style={[textStyles.subtitle, mobileSubtitle]}>
          Google certified UX/UI Designer with a mission to create delightful
          experiences and lovable products!
        </Text>
      </View>
    </View>
  );
};
