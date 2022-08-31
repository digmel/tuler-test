import React from "react";
import { View, Text, Pressable } from "react-native";
import { textStyles } from "../config/textStyles";
import { styles } from "./styles";
import Image from "next/image";

const Header = ({ isHome, isProject, isAbout }) => {
  const homeActiveStyle = isHome ? { paddingBottom: 4, fontWeight: 500 } : {};
  const projectActiveStyle = isProject
    ? { paddingBottom: 4, fontWeight: 500 }
    : {};
  const aboutActiveStyle = isAbout ? { paddingBottom: 4, fontWeight: 500 } : {};

  return (
    <View style={styles.container}>
      <View style={styles.contentStart}>
        <Pressable style={styles.menuItem} accessibilityRole="link" href={`/`}>
          <Text style={[textStyles.menuItem, homeActiveStyle]}>Home</Text>

          {isHome && (
            <View style={{ alignItems: "center" }}>
              <Image src="/assets/active-menu.svg" width={131} height={16} />
            </View>
          )}
        </Pressable>

        <Pressable style={styles.menuItem}>
          <Text style={[textStyles.menuItem, projectActiveStyle]}>
            Projects
          </Text>

          {isProject && (
            <View style={{ alignItems: "center" }}>
              <Image src="/assets/active-menu.svg" width={131} height={16} />
            </View>
          )}
        </Pressable>

        <Pressable
          style={styles.menuItem}
          accessibilityRole="link"
          href={`/About`}
        >
          <Text style={[textStyles.menuItem, aboutActiveStyle]}>About</Text>

          {isAbout && (
            <View style={{ alignItems: "center" }}>
              <Image src="/assets/active-menu.svg" width={131} height={16} />
            </View>
          )}
        </Pressable>
      </View>

      <View style={styles.contentEnd}>
        <Text style={textStyles.menuItem}>elene.uxdesign@gmail.com</Text>
      </View>
    </View>
  );
};

export default Header;
