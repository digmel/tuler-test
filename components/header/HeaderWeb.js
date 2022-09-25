import React, { useState } from "react";
import { View, Text, Pressable, Clipboard } from "react-native";
import { constants, AnimatedView, Colors } from "..";
import { styles } from "./styles";
import Image from "next/image";
import { HeaderButton } from "./HeaderButton";
import { MenuWeb } from "./MenuWeb";

export const HeaderWeb = ({ isHome, isProject, isAbout, isMobile }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleHover = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const dropdownMenuStyle = isProject ? { marginTop: 10 } : { marginTop: 22 };

  const menuActiveStyle = {
    fontSize: 20,
    lineHeight: "130%",
    fontWeight: 500,
    color: Colors.primary,
    fontFamily: "Poppins",
    letterSpacing: "1%",
  };

  const menuStyle = {
    fontSize: 20,
    lineHeight: "130%",
    fontWeight: 300,
    color: Colors.primary,
    fontFamily: "Poppins",
  };

  const textStyleHome = isHome ? menuActiveStyle : menuStyle;
  const textStyleProject = isProject ? menuActiveStyle : menuStyle;
  const textStyleAbout = isAbout ? menuActiveStyle : menuStyle;
  return (
    <>
      <View style={styles.container}>
        <View style={styles.contentStart}>
          <Pressable
            style={styles.menuItem}
            accessibilityRole="link"
            href={`/`}
          >
            <Text style={textStyleHome}>Home</Text>

            {isHome && (
              <AnimatedView>
                <View style={{ alignItems: "center" }}>
                  <Image
                    src="/assets/active-menu.svg"
                    width={131}
                    height={16}
                  />
                </View>
              </AnimatedView>
            )}
          </Pressable>

          <Pressable
            style={styles.menuItem}
            onHoverIn={handleHover}
            onHoverOut={handleHover}
          >
            <View style={{ flexDirection: "row" }}>
              <Text style={textStyleProject}>Projects</Text>

              <View style={{ marginStart: 8, alignSelf: "center" }}>
                <AnimatedView>
                  <Image src="/assets/dropdown.svg" width={17} height={11} />
                </AnimatedView>
              </View>
            </View>

            {isProject && (
              <AnimatedView>
                <View style={{ alignItems: "center" }}>
                  <Image
                    src="/assets/active-menu.svg"
                    width={131}
                    height={16}
                  />
                </View>
              </AnimatedView>
            )}

            {isDropdownVisible && (
              <View style={dropdownMenuStyle}>
                <MenuWeb />
              </View>
            )}
          </Pressable>

          <Pressable
            style={styles.menuItem}
            accessibilityRole="link"
            href={`/about`}
          >
            <Text style={textStyleAbout}>About</Text>

            {isAbout && (
              <AnimatedView>
                <View style={{ alignItems: "center" }}>
                  <Image
                    src="/assets/active-menu.svg"
                    width={131}
                    height={16}
                  />
                </View>
              </AnimatedView>
            )}
          </Pressable>
        </View>

        <View style={styles.contentEnd}>
          <HeaderButton title="Contact" content={constants.socials.Email} />
        </View>
      </View>
    </>
  );
};
