import React from "react";
import { View, ScrollView } from "react-native";
import { useSpring, animated } from "@react-spring/web";
import { styles } from "./styles";
import { Header, Footer } from "../../components";
import { usePlatform } from "../../hooks";

export const Screen = ({ children, isHome, isProject, isAbout }) => {
  const AnimatedView = animated(View);
  const transitionStyles = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  const { isMobile } = usePlatform();
  const contentMobileStyle = isMobile
    ? { paddingHorizontal: 32, paddingBottom: 100 }
    : {};

  return (
    <ScrollView style={styles.container} stickyHeaderIndices={[0]}>
      <Header isHome={isHome} isProject={isProject} isAbout={isAbout} />

      <AnimatedView style={transitionStyles}>
        <View style={[styles.content, contentMobileStyle]}>{children}</View>
      </AnimatedView>

      <Footer />
    </ScrollView>
  );
};
