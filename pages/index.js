import React, { useState, useEffect } from "react";
import { Screen } from "../components";
import { View, Text, useWindowDimensions, Image, Button } from "react-native";

const URL =
  "https://script.google.com/macros/s/AKfycbyWA81iY-k9_UAx78vEvaMEwJEtXcpJuiqr1lh3RmvRHauPZjP7XXpl7ReJPkMT5Ujo1w/exec";

export default function App() {
  const { width } = useWindowDimensions();
  const [isMobile, setIsMobile] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState();

  const [imageURL, setImageURL] = useState();

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
    setMessage(imageURL);
  };

  const params = {
    email: "example@gmail.com",
    name: "Giorgi2",
    message: message,
  };

  async function sendEmail() {
    const response = await fetch(URL, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "text/plain",
      },
      body: JSON.stringify(params),
    });

    const res = await response.json();
    console.log("first", res);

    if (res?.result?.contentLength > 0) {
      setName("");
      setEmail("");
      setMessage("");
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
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            type="file"
            id="capture"
            accept="image/*,video/*"
            capture
            multiple
            onChange={handleChange}
          />

          <Image
            style={{
              width: 250,
              height: 250,
            }}
            source={{
              uri: imageURL,
            }}
          />

          <Text>{imageURL}</Text>

          <Button title="send" onPress={sendEmail} />
        </View>
      )}
    </Screen>
  );
}
