import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import Image from "next/image";
import { textStyles } from "../config/textStyles";

export const Card = ({ link, image, imageWidth, title, description }) => {
  return (
    <>
      <View style={styles.container} accessibilityRole="link" href={link}>
        <View style={styles.containerImage}>
          <Image src={`/assets/${image}`} width={imageWidth} height={250} />
        </View>

        <Text style={textStyles.h3}>{title}</Text>

        <View style={styles.divider}>
          <Image src="/assets/card-divider.svg" width={637} height={5} />
        </View>

        <Text style={textStyles.card}>{description}</Text>
      </View>
    </>
  );
};
