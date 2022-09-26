import React, { useRef } from "react";
import { View, ScrollView, TouchableOpacity } from "react-native";
import { Header, Footer, AnimatedView, Colors } from "..";
import Image from "next/image";

export const Screen = ({
  children,
  isHome,
  isProject,
  isAbout,
  isMobile,
  ScrollUp,
}) => {
  const containerStyle = {
    flex: 1,
    backgroundColor: Colors.light,
  };

  const contentStyle = {
    flex: 1,
    paddingHorizontal: isMobile ? 32 : 120,
    paddingBottom: isMobile ? 100 : 300,
    paddingTop: isMobile ? 32 : 50,
  };

  const scrollRef = useRef();

  const scrollUp = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };

  const iconStyle = {
    zIndex: 10,
    position: "absolute",
    alignSelf: "flex-end",
    top: 700,
    backgroundColor: Colors.grayLight,
    height: 45,
    width: 45,
    borderRadius: 8,
    justifyContent: "center",
    marginEnd: isMobile ? 32 : 120,
  };

  return (
    <View style={{ flex: 1 }}>
      <Header
        isHome={isHome}
        isProject={isProject}
        isAbout={isAbout}
        isMobile={isMobile}
      />
      {isProject && (
        <TouchableOpacity style={iconStyle} onPress={scrollUp}>
          <Image src={`/assets/scroll-up-icon.svg`} width={32} height={20} />
        </TouchableOpacity>
      )}

      <ScrollView
        style={containerStyle}
        // stickyHeaderIndices={[0]}
        ref={scrollRef}
      >
        <AnimatedView>
          <View style={contentStyle}>{children}</View>
        </AnimatedView>

        <Footer isMobile={isMobile} />
      </ScrollView>
    </View>
  );
};
