import { View, Text, Modal } from "react-native";
import React from "react";
import { textStyles, Colors, AnimatedView, constants } from "..";
import Image from "next/image";

export const MenuMobile = ({ isHome, isProject, isAbout }) => {
  const containerStyle = {
    zIndex: 10,
    flex: 1,
    backgroundColor: Colors.grayHover,
    paddingVertical: 24,
    paddingHorizontal: 32,
    borderLeftColor: Colors.gray,
    borderLeftWidth: 1,
    justifyContent: "space-between",
  };

  const menuItemContainer = {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  };

  const contactContainerStyle = {
    flex: 1,
    justifyContent: "flex-end",
  };

  const menuCloseIconStyle = {
    marginTop: -15,
    marginEnd: -22,
    alignSelf: "flex-end",
  };

  const menuItemTextStyle = {
    fontSize: 20,
    lineHeight: "130%",
    fontWeight: 400,
    color: Colors.primary,
    fontFamily: "Poppins",
  };

  const projectItemTextStyle = {
    fontSize: 16,
    lineHeight: "130%",
    fontWeight: 300,
    color: Colors.primary,
    fontFamily: "Poppins",
  };

  const menuItemStyle = {
    paddingVertical: 36,
  };

  const projectItemStyle = {
    paddingVertical: 20,
    paddingStart: 32,
    borderBottomWidth: 1,
    borderBottomColor: Colors.accent,
    alignSelf: "stretch",
  };

  const fullScreenModalStyle = {
    backgroundColor: Colors.grayHover,
    margin: 0,
    alignItems: undefined,
    justifyContent: undefined,
  };

  return (
    <Modal transparent style={fullScreenModalStyle}>
      <View style={containerStyle}>
        <AnimatedView>
          <View style={menuCloseIconStyle}>
            <Image src="/assets/mobile-menu-close.svg" width={45} height={45} />
          </View>

          <View style={menuItemContainer}>
            <View style={menuItemStyle} accessibilityRole="link" href={`/`}>
              <Text style={menuItemTextStyle}>Home</Text>
            </View>

            <View style={{ marginBottom: 12 }}>
              <Text style={menuItemTextStyle}>Projects</Text>
            </View>

            <View
              style={projectItemStyle}
              accessibilityRole="link"
              href={`/GlutenFreeApp`}
            >
              <Text style={projectItemTextStyle}>Gluten Free Finder App</Text>
            </View>

            <View
              style={projectItemStyle}
              accessibilityRole="link"
              href={`/FoodWasteApp`}
            >
              <Text style={projectItemTextStyle}>Reduce Food Waste App</Text>
            </View>

            <View
              style={projectItemStyle}
              accessibilityRole="link"
              href={`/FirstAidApp`}
            >
              <Text style={projectItemTextStyle}>Learn First Aid App</Text>
            </View>

            <View
              style={projectItemStyle}
              // accessibilityRole="link"
              // href={`/`}
            >
              <Text style={[projectItemTextStyle, { color: "gray" }]}>
                Portfolio Website
              </Text>
            </View>

            <View
              style={projectItemStyle}
              // accessibilityRole="link"
              // href={`/`}
            >
              <Text style={[projectItemTextStyle, { color: "gray" }]}>
                Startup Info Website
              </Text>
            </View>

            <View
              style={menuItemStyle}
              accessibilityRole="link"
              href={`/about`}
            >
              <Text style={menuItemTextStyle}>About me</Text>
            </View>
          </View>
        </AnimatedView>
        <AnimatedView>
          <View style={contactContainerStyle}>
            <Text style={menuItemTextStyle}>Contact</Text>
            <Text style={textStyles.link}>{constants.socials.Email}</Text>
          </View>
        </AnimatedView>
      </View>
    </Modal>
  );
};
