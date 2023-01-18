import React, { useState, useEffect } from "react";
import { Screen } from "../components";
import { View, Text, useWindowDimensions } from "react-native";

export default function App() {
  const [isMobile, setIsMobile] = useState(false);
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width < 1400) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [width]);

  return (
    <Screen isMobile={isMobile}>
      {!isMobile && (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Please use only phone to open the Tuler.</Text>
        </View>
      )}

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>tuler.io</Text>
      </View>
    </Screen>
  );
}
