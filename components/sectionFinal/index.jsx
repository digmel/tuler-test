import React from "react";
import { View, Text, Linking } from "react-native";
import { Button, Colors } from "..";

export const SectionFinal = ({ link, isMobile }) => {
  const openURL = async () => {
    await Linking.openURL(link);
  };

  const containerStyle = {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  };

  const titleStyle = {
    fontSize: isMobile ? 20 : 28,
    lineHeight: "130%",
    fontWeight: isMobile ? 600 : 500,
    color: Colors.primary,
    fontFamily: "Poppins",
  };

  const bodyStyle = {
    fontSize: isMobile ? 14 : 16,
    lineHeight: "130%",
    fontWeight: 300,
    color: Colors.primary,
    fontFamily: "Poppins",
    marginTop: 16,
  };

  return (
    <>
      {!isMobile && (
        <View style={containerStyle}>
          <Text style={titleStyle}>Thank you!</Text>

          <Text style={bodyStyle}>
            Click on the button if you’d like to check the prototype!
          </Text>

          <Button label="View Prototype" onPress={openURL} topSpace={48} />
        </View>
      )}
    </>
  );
};
