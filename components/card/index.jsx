import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import Image from "next/image";
import { textStyles } from "../config/textStyles";

export const Card = ({
  link,
  imagePath,
  imageWidth,
  imageHeight,
  label,
  title,
  description,
}) => {
  return (
    <>
      <View style={styles.container} accessibilityRole="link" href={link}>
        <View style={styles.leftContainer}>
          <Image src={imagePath} width={imageWidth} height={imageHeight} />
        </View>

        <View style={styles.rightContainer}>
          <Text style={textStyles.label}>{label}</Text>

          <Text style={textStyles.h1.regular}>{title}</Text>

          <View style={styles.divider}>
            <Image src="/assets/card-divider.svg" width={637} height={5} />
          </View>

          <Text style={textStyles.card}>{description}</Text>

          <Text style={[textStyles.link, styles.link]}>View More</Text>
        </View>
      </View>
    </>
  );
};
