import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { Screen } from "../screen";
import Image from "next/image";
import { textStyles } from "../config/textStyles";

export const Card = () => {
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Image
            src="/assets/gluten-hero.svg"
            width={639}
            height={500}
            alt="Author Image"
          />
        </View>

        <View style={styles.rightContainer}>
          <Text style={textStyles.label}>1-WEEK UX/UI CHALLENGE</Text>

          <Text style={textStyles.h1.regular}>
            Gluten-Free Restaurant Finder
          </Text>

          <View style={styles.divider}>
            <Image src="/assets/card-divider.svg" width={637} height={5} />
          </View>

          <Text style={textStyles.card}>
            The app allows users to find restaurant based on their preferences.
          </Text>

          <Text style={[textStyles.link, styles.link]}>View More</Text>
        </View>
      </View>
    </Screen>
  );
};
