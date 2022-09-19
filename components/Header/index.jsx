import React, { useState } from "react";
import { View, Text, Pressable, Clipboard } from "react-native";
import { textStyles } from "../config/textStyles";
import { styles } from "./styles";
import Image from "next/image";
import { ActionButton } from "./actionButton";
import { DropdownMenu } from "./DropdownMenu";
import { useSpring, animated } from "@react-spring/web";
import { usePlatform } from "../../hooks";
import { MobileMenu } from "./MobileMenu";

const contactEmail = "elene.uxdesign@gmail.com";

export const Header = ({ isHome, isProject, isAbout }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  const { isMobile } = usePlatform();

  const handleHover = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const dropdownMenuStyle = isProject ? { marginTop: 10 } : { marginTop: 22 };

  const textStyleHome = isHome
    ? textStyles.menuItem.active
    : textStyles.menuItem.default;
  const textStyleProject = isProject
    ? textStyles.menuItem.active
    : textStyles.menuItem.default;
  const textStyleAbout = isAbout
    ? textStyles.menuItem.active
    : textStyles.menuItem.default;

  const AnimatedView = animated(View);
  const transitionStyles = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 1100 },
  });

  return (
    <>
      {isMobile ? (
        <Pressable
          style={{ alignSelf: "flex-end", paddingTop: 8, marginEnd: 8 }}
          onPress={() => {
            setIsMobileMenuVisible(!isMobileMenuVisible);
          }}
        >
          <Image src="/assets/mobile-menu.svg" width={45} height={45} />
          {isMobileMenuVisible && <MobileMenu />}
        </Pressable>
      ) : (
        <View style={styles.container}>
          <View style={styles.contentStart}>
            {/* Home */}
            <Pressable
              style={styles.menuItem}
              accessibilityRole="link"
              href={`/`}
            >
              <Text style={textStyleHome}>Home</Text>

              {isHome && (
                <AnimatedView style={transitionStyles}>
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

            {/* Projects */}
            <Pressable
              style={styles.menuItem}
              onHoverIn={handleHover}
              onHoverOut={handleHover}
            >
              <View style={{ flexDirection: "row" }}>
                <Text style={textStyleProject}>Projects</Text>

                <View style={{ marginStart: 8, alignSelf: "center" }}>
                  <AnimatedView style={transitionStyles}>
                    <Image src="/assets/dropdown.svg" width={17} height={11} />
                  </AnimatedView>
                </View>
              </View>

              {isProject && (
                <AnimatedView style={transitionStyles}>
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
                  <DropdownMenu />
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
                <AnimatedView style={transitionStyles}>
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

          {/* Contact */}
          <View style={styles.contentEnd}>
            <ActionButton title="Contact" content={contactEmail} />
          </View>
        </View>
      )}
    </>
  );
};
