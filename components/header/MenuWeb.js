import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { textStyles } from "..";
import { styles } from "./styles";

export const MenuWeb = () => {
  const [isHover1, setIsHover1] = useState(false);
  const [isHover2, setIsHover2] = useState(false);
  const [isHover3, setIsHover3] = useState(false);

  const hoverStyle1 = isHover1 ? styles.dropdownMenuItemHover : {};
  const hoverStyle2 = isHover2 ? styles.dropdownMenuItemHover : {};
  const hoverStyle3 = isHover3 ? styles.dropdownMenuItemHover : {};

  return (
    <View style={styles.dropdownMenuContainer}>
      <Pressable
        href="/GlutenFreeApp"
        accessibilityRole="link"
        style={[styles.dropdownMenuItem, hoverStyle1]}
        onHoverIn={() => setIsHover1(true)}
        onHoverOut={() => setIsHover1(false)}
      >
        <Text style={textStyles.body}>Gluten Free App</Text>
      </Pressable>

      <Pressable
        href="/FoodWasteApp"
        accessibilityRole="link"
        style={[styles.dropdownMenuItem, hoverStyle2]}
        onHoverIn={() => setIsHover2(true)}
        onHoverOut={() => setIsHover2(false)}
      >
        <Text style={textStyles.body}>Food Waste App</Text>
      </Pressable>

      <Pressable
        href="FirstAidApp"
        accessibilityRole="link"
        style={[styles.dropdownMenuItem, hoverStyle3]}
        onHoverIn={() => setIsHover3(true)}
        onHoverOut={() => setIsHover3(false)}
      >
        <Text style={textStyles.body}>First Aid App</Text>
      </Pressable>
    </View>
  );
};
