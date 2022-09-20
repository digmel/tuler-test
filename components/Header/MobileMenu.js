import { View, Text, Modal } from "react-native";
import React from "react";
import { textStyles } from "../config/textStyles";
import { colors } from "../config/colors";
import Image from "next/image";

export const MobileMenu = () => {
  return (
    <Modal transparent>
      <View
        style={{
          width: 400,
          zIndex: 10,
          flex: 1,
          backgroundColor: colors.grayHover,
          marginStart: 100,
          paddingVertical: 64,
          paddingStart: 32,
          borderLeftColor: colors.gray,
          borderLeftWidth: 1,
        }}
      >
        <View style={{ marginBottom: 12 }} accessibilityRole="link" href={`/`}>
          <Text style={[textStyles.h3, { fontSize: 20 }]}>Home</Text>

          <View style={{ alignItems: "flex-start", marginStart: -12 }}>
            <Image src="/assets/active-menu.svg" width={100} height={16} />
          </View>
        </View>

        <View style={{ marginTop: 24 }}>
          <Text style={[textStyles.h3, { fontSize: 22 }]}>Projects</Text>
        </View>

        <View
          style={{ marginTop: 12, marginStart: 16 }}
          accessibilityRole="link"
          href={`/GlutenFreeApp`}
        >
          <Text style={[textStyles.h3, { fontSize: 20, fontWeight: 300 }]}>
            Gluten Free App
          </Text>
        </View>

        <View
          style={{ marginTop: 32, marginStart: 16 }}
          accessibilityRole="link"
          href={`/FoodWasteApp`}
        >
          <Text style={[textStyles.h3, { fontSize: 20, fontWeight: 300 }]}>
            Reduce Food Waste App
          </Text>
        </View>

        <View
          style={{ marginTop: 32, marginStart: 16 }}
          accessibilityRole="link"
          href={`/FirstAidApp`}
        >
          <Text style={[textStyles.h3, { fontSize: 20, fontWeight: 300 }]}>
            Learn First Aid App
          </Text>
        </View>

        <View
          style={{ marginTop: 48 }}
          accessibilityRole="link"
          href={`/about`}
        >
          <Text style={[textStyles.h3, { fontSize: 20 }]}>About me</Text>
        </View>
      </View>
    </Modal>
  );
};
