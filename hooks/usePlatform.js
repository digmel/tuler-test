import { useState, useEffect } from "react";
import { useWindowDimensions } from "react-native";

export const usePlatform = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width < 1400) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  return { isMobile };
};
