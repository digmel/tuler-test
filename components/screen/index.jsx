import React from "react";
import { View, ScrollView } from "react-native";
import { Header, Footer, AnimatedView, Colors } from "..";

export const Screen = ({ children, isHome, isProject, isAbout, isMobile }) => {
  const containerStyle = {
    flex: 1,
    backgroundColor: Colors.light,
  };

  const contentStyle = {
    paddingHorizontal: isMobile ? 32 : 120,
    paddingBottom: isMobile ? 100 : 300,
    paddingTop: isMobile ? 32 : 50,
  };

  return (
    <ScrollView style={containerStyle} stickyHeaderIndices={[0]}>
      <Header isHome={isHome} isProject={isProject} isAbout={isAbout} />

      <AnimatedView>
        <View style={contentStyle}>{children}</View>
      </AnimatedView>

      <Footer />
    </ScrollView>
  );
};
