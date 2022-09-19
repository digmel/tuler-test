import { View, Text, Modal } from "react-native";
import React from "react";
import { textStyles } from "../config/textStyles";
import { colors } from "../config/colors";

export const MobileMenu = () => {
  return (
    <Modal transparent>
      <View
        style={{
          width: 300,
          zIndex: 10,
          flex: 1,
          backgroundColor: colors.grayHover,
          marginStart: 100,
          paddingVertical: 64,
          paddingStart: 32,
        }}
      >
        <View style={{ marginTop: 12 }} accessibilityRole="link" href={`/`}>
          <Text style={textStyles.h3}>Home</Text>
        </View>

        <View style={{ marginTop: 12 }}>
          <Text style={textStyles.h3}>Projects</Text>
        </View>

        <View
          style={{ marginTop: 12 }}
          accessibilityRole="link"
          href={`/about`}
        >
          <Text style={textStyles.h3}>About</Text>
        </View>
      </View>
    </Modal>
  );
};
