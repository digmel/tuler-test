import React, { useState } from "react";
import { Pressable } from "react-native";
import Image from "next/image";
import { MenuMobile } from "./MenuMobile";

export const HeaderMobile = ({ isHome, isProject, isAbout }) => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  const containerStyle = { alignSelf: "flex-end", paddingTop: 8, marginEnd: 8 };

  const handleToggle = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible);
  };

  return (
    <Pressable style={containerStyle} onPress={handleToggle}>
      <Image src="/assets/mobile-menu.svg" width={45} height={45} />
      {isMobileMenuVisible && (
        <MenuMobile isHome={isHome} isProject={isProject} isAbout={isAbout} />
      )}
    </Pressable>
  );
};
