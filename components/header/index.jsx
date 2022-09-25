import React from "react";
import { HeaderMobile } from "./HeaderMobile";
import { HeaderWeb } from "./HeaderWeb";

export const Header = ({ isHome, isProject, isAbout, isMobile }) => {
  return (
    <>
      {isMobile ? (
        <HeaderMobile isHome={isHome} isProject={isProject} isAbout={isAbout} />
      ) : (
        <HeaderWeb isHome={isHome} isProject={isProject} isAbout={isAbout} />
      )}
    </>
  );
};
