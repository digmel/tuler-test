import React from "react";
import { View } from "react-native";
import NextImage from "next/image";

// Image Variants:

// "fullSection"
// "halfSection"
// "thirdSection"
// "heroSection"
// "cardCover"
// "aboutCover"
// "profile"

export const Image = ({ topSpace, bottomSpace, name, variant, isMobile }) => {
  let width;
  let height;

  switch (variant) {
    case "fullSection":
      width = isMobile ? 325 : 1440;
      height = isMobile ? 200 : 800;
      break;
    case "halfSection":
      width = 600;
      height = 600;
      break;
    case "thirdSection":
      width = 400;
      height = 600;
      break;
  }

  const containerStyle = {
    width,
    height,
    marginTop: topSpace,
    marginBottom: bottomSpace,
    backgroundColor: "gray",
  };

  return (
    <View style={containerStyle}>
      <NextImage
        src={`/assets/${name}`}
        width={width}
        height={height}
        layout="responsive"
      />
    </View>
  );
};
