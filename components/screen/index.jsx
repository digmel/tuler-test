import React from "react";
import { View, ScrollView } from "react-native";
import { styles } from "./styles";
import { Header, Footer } from "../../components";

export const Screen = ({ children, isHome, isProject, isAbout }) => {
  return (
    <ScrollView style={styles.container} stickyHeaderIndices={[0]}>
      <Header isHome={isHome} isProject={isProject} isAbout={isAbout} />

      <View style={styles.content}>{children}</View>

      <Footer />
    </ScrollView>
  );
};
