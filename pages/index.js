import React, { useState, useEffect } from "react";
import { Screen } from "../components";
import { View, Text, useWindowDimensions, Image, Button } from "react-native";

const URL =
  "https://script.google.com/macros/s/AKfycbxlqWKmRHh2lJaMnoWUYt2HMa7laYBRf5nN0-SGmUBe6jhmY3sqdBwAu3hVA8IwktIoqw/exec";

export default function App() {
  const { width } = useWindowDimensions();
  const [isMobile, setIsMobile] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState();

  const [imageURL, setImageURL] = useState("");
  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    if (width < 1400) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [width]);

  const handleChange = (ev) => {
    let input = document.getElementById("capture");
    setImageURL(window.URL.createObjectURL(input.files[0]));
    setShowImage(true);
    setMessage(input.files[0]);
  };

  const params = {
    email: "example@gmail.com",
    name: "Giorgi2",
    message: message,
  };

  async function sendEmail() {
    setImageURL("");
    setShowImage(false);

    try {
      const response = await fetch(URL, {
        method: "POST",
        mode: "no-cors",
        body: message,
      });
    } catch (error) {
      console.log("error", error);
    }
  }
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

      {isMobile && (
        <View
          style={{
            flex: 1,
            marginTop: 24,
          }}
        >
          <View
            style={{ flex: 1, backgroundColor: "gray", borderRadius: "10px" }}
          >
            <label
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "100px",
                }}
              >
                <Text
                  style={{ paddingHorizontal: "20px", textAlign: "center" }}
                >
                  Click anywhere to activate camera and start scanning
                </Text>
              </View>
              <input
                type="file"
                id="capture"
                accept="image/*,video/*"
                capture
                multiple
                onChange={handleChange}
                style={{
                  display: "none",
                }}
              />
            </label>
          </View>

          <View style={{ marginVertical: 24, width: 250, height: 250 }}>
            {showImage && (
              <Image
                style={{
                  width: 250,
                  height: 250,
                }}
                source={{
                  uri: imageURL,
                }}
              />
            )}
          </View>

          <View style={{ marginBottom: 64 }}>
            <Button
              title="send"
              color="blue"
              borderRadius="12px"
              onPress={sendEmail}
            />
          </View>
        </View>
      )}
    </Screen>
  );
}
