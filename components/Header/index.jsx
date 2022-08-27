import React from "react";
import { View, Text } from "react-native";
import { textStyles } from "../config/textStyles";
import Image from "next/image";
import { styles } from "./styles";

export const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <View style={styles.menu}>
          <Text
            style={[textStyles.menu, { paddingBottom: 4, fontWeight: 500 }]}
          >
            Home
          </Text>
          <View style={{ alignItems: "center" }}>
            <Image src="/assets/active-menu.svg" width={131} height={16} />
          </View>
        </View>
        <View style={styles.menu}>
          <Text style={textStyles.menu}>Projects</Text>
        </View>
        <View style={styles.menu}>
          <Text style={textStyles.menu}>About</Text>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <Text style={textStyles.menu}>elene.uxdesign@gmail.com</Text>
      </View>
    </View>
  );
};
