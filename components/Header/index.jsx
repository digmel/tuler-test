import React, { useState } from "react";
import { View, Text, Pressable, Clipboard } from "react-native";
import { textStyles } from "../config/textStyles";
import { styles } from "./styles";
import Image from "next/image";

const contactEmail = "elene.uxdesign@gmail.com";

export const Header = ({ isHome, isProject, isAbout }) => {
  const textStyleHome = isHome
    ? textStyles.menuItem.active
    : textStyles.menuItem.default;
  const textStyleProject = isProject
    ? textStyles.menuItem.active
    : textStyles.menuItem.default;
  const textStyleAbout = isAbout
    ? textStyles.menuItem.active
    : textStyles.menuItem.default;

  const [isEmailVisible, setIsEmailVisible] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  const onContact = () => {
    Clipboard.setString(contactEmail);
    setIsEmailVisible(true);
    setIsButtonVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentStart}>
        {/* Home */}
        <Pressable style={styles.menuItem} accessibilityRole="link" href={`/`}>
          <Text style={textStyleHome}>Home</Text>

          {isHome && (
            <View style={{ alignItems: "center" }}>
              <Image src="/assets/active-menu.svg" width={131} height={16} />
            </View>
          )}
        </Pressable>

        {/* Projects */}
        <Pressable style={styles.menuItem}>
          <Text style={textStyleProject}>Projects</Text>

          {isProject && (
            <View style={{ alignItems: "center" }}>
              <Image src="/assets/active-menu.svg" width={131} height={16} />
            </View>
          )}
        </Pressable>

        {/* About */}
        <Pressable
          style={styles.menuItem}
          accessibilityRole="link"
          href={`/about`}
        >
          <Text style={textStyleAbout}>About</Text>

          {isAbout && (
            <View style={{ alignItems: "center" }}>
              <Image src="/assets/active-menu.svg" width={131} height={16} />
            </View>
          )}
        </Pressable>
      </View>

      {/* Contact */}
      <View style={styles.contentEnd}>
        {isButtonVisible && (
          <Pressable style={styles.button} onPress={onContact}>
            <Text style={textStyles.menuItem.default}>Contact</Text>
          </Pressable>
        )}
        {isEmailVisible && <Text style={textStyles.label}>{contactEmail}</Text>}
      </View>
    </View>
  );
};
