import React from "react";
import { View, Text, Linking } from "react-native";
import { styles } from "./styles";
import { textStyles, Button } from "..";

export const ProjectFinal = ({ link }) => {
  const _openURL = async () => {
    await Linking.openURL(link);
  };

  return (
    <View style={styles.container}>
      <Text style={textStyles.h3}>Thank you!</Text>

      <Text style={[textStyles.subtitle, { marginTop: 16 }]}>
        Click on the button if you’d like to check the prototype!
      </Text>

      <Button label="View Prototype" onPress={_openURL} topSpace={64} />
    </View>
  );
};
