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
          <Text style={textStyles.label}>hello</Text>
        </View>
      </View>
    </Screen>
  );
};
