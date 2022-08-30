import React from "react";
import { View, Text } from "react-native";
import { textStyles } from "../config/textStyles";
import { styles } from "./styles";
import Image from "../image";

export const Footer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <View style={styles.icon}>
          <Image
            src="/assets/linkedin.svg"
            width={40}
            height={40}
            alt="Author Image"
          />
        </View>
        <View style={styles.icon}>
          <Image
            src="/assets/twitter.svg"
            width={40}
            height={40}
            alt="Author Image"
          />
        </View>
        <View style={styles.icon}>
          <Image
            src="/assets/facebook.svg"
            width={40}
            height={40}
            alt="Author Image"
          />
        </View>
      </View>
      <View style={styles.rightContainer}>
        <Text style={textStyles.body}>Copyright © 2022 Elene Zedginidze.</Text>
        <Text style={textStyles.body}>All rights reserved.</Text>
      </View>
    </View>
  );
};
