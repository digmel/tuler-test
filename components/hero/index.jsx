import React from "react";
import { View, Text } from "react-native";
import { shadowStyle as _shadowStyle, Colors } from "..";
import Image from "next/image";

export const Hero = ({ isMobile, title }) => {
  const containerStyle = {
    flex: 1,
    flexDirection: isMobile ? "column" : "row",
    justifyContent: "flex-start",
    alignItems: isMobile ? "flex-start" : "center",
    paddingVertical: isMobile ? 0 : 48,
    paddingStart: isMobile ? 0 : 32,
    marginBottom: 48,
    marginTop: isMobile ? -32 : 0,
  };

  const shadowStyle = isMobile ? {} : _shadowStyle;

  const imageStyle = {
    alignItems: isMobile ? "center" : "flex-start",
    justifyContent: "flex-start",
    paddingRight: isMobile ? 0 : 24,
    flexDirection: isMobile ? "row" : "column",
  };

  const contentStyle = {
    flex: 1,
  };

  const bodyStyle = {
    fontSize: isMobile ? 14 : 16,
    lineHeight: "130%",
    fontWeight: 300,
    color: Colors.primary,
    fontFamily: "Poppins",
    paddingTop: 16,
  };

  const titleStyle = {
    fontSize: isMobile ? 20 : 28,
    lineHeight: "130%",
    fontWeight: isMobile ? 600 : 500,
    color: Colors.primary,
    fontFamily: "Poppins",
  };

  const titleContainer = {
    marginBottom: isMobile ? 12 : 16,
  };

  const iconWidth = isMobile ? 57 : 70;
  const iconHeight = isMobile ? 24 : 32;

  return (
    <>
      {title && !isMobile && (
        <View style={titleContainer}>
          <Text style={titleStyle}>{title}</Text>
        </View>
      )}
      <View
        style={[containerStyle, shadowStyle]}
        accessibilityRole="link"
        href={`/about`}
      >
        <View style={imageStyle}>
          <Image src="/assets/author.svg" width={100} height={100} />
          {isMobile && (
            <Text style={[titleStyle, { marginStart: 16 }]}>
              Hi, I’m Elene 👋
            </Text>
          )}
        </View>

        <View style={contentStyle}>
          {!isMobile && <Text style={titleStyle}>Hi, I’m Elene 👋</Text>}

          <View style={{ flexDirection: isMobile ? "column" : "row" }}>
            <View
              style={{ flexDirection: "row", marginBottom: isMobile && -14 }}
            >
              <Text style={bodyStyle}>Google certified</Text>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: -14,
                }}
              >
                <Image
                  src="/assets/ux-icon.svg"
                  width={iconWidth}
                  height={iconHeight}
                />
              </View>
              <Text style={bodyStyle}>Designer with </Text>
            </View>
            <Text style={bodyStyle}>
              a mission to create delightful experiences and lovable products!
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};
