import React from "react";
import { View, Text, Linking } from "react-native";
import { styles } from "./styles";
import Image from "next/image";
import { textStyles, shadowStyle, Button } from "..";

export const Card = ({
  link,
  image,
  imageWidth,
  title,
  description,
  isProject,
  cardStyle,
  isMobile,
}) => {
  const _shadowStyle = isProject ? {} : shadowStyle;

  const _openURL = async () => {
    await Linking.openURL(link);
  };
  return (
    <>
      <View
        style={[
          styles.container,
          {
            alignSelf: "center",
            marginEnd: isMobile ? 0 : 29,
            marginVertical: isMobile ? -36 : 0,
            transform: [
              {
                scale: isMobile ? 0.8 : 1,
              },
            ],
          },
          _shadowStyle,
          cardStyle,
        ]}
        accessibilityRole="link"
        href={link}
      >
        <View style={styles.containerImage}>
          <Image src={`/assets/${image}`} width={imageWidth} height={250} />
        </View>

        <Text style={textStyles.h3}>{title}</Text>

        <View style={styles.divider}>
          <Image src="/assets/card-divider.svg" width={637} height={5} />
        </View>

        <Text style={textStyles.card}>{description}</Text>

        {isMobile && isProject && (
          <View style={{ marginTop: 24 }}>
            <Button label="Prototype" onPress={_openURL} isMobile={isMobile} />
          </View>
        )}
      </View>
    </>
  );
};
