import React from "react";
import { View, Text, Pressable, Linking } from "react-native";
import { styles } from "./styles";
import Image from "next/image";
import { textStyles } from "../config/textStyles";
import { colors } from "../config/colors";
import { Button } from "../button";

export const ProjectHero = ({
  link,
  imagePath,
  imageWidth,
  imageHeight,
  title,
  description,
}) => {
  const _openURL = async () => {
    await Linking.openURL(link);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerStart}>
        <Text style={textStyles.h1}>{title}</Text>
        <Text style={textStyles.card}>{description}</Text>

        <Button label="View Prototype" onPress={_openURL} topSpace={42} />
      </View>

      <View style={styles.containerEnd}>
        <Image src={imagePath} width={imageWidth} height={imageHeight} />
      </View>
    </View>
  );
};
