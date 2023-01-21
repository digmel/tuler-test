import React, { useState, useEffect } from "react";
import { Screen } from "../components";
import { View, Text, Image, Button } from "react-native";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { v4 as uuidv4 } from "uuid";
import { usePlatform } from "../hooks";
import { useRouter } from "next/router";
import { ActivityIndicator } from "react-native";

const URL =
  "https://script.google.com/macros/s/AKfycbxizjvxjzwDKJK_VK14XhAD3LAf2xtr1KIxbam322vuV3LwRTbKVI4tUxWDZoaEWlCsOQ/exec";

const CDNURL =
  "https://zgtxpheizfaytyphdejc.supabase.co/storage/v1/object/public/images/";

// CDNURL + user.id + "/" + image.name

export default function App() {
  const { isMobile } = usePlatform();
  const [showImage, setShowImage] = useState(true);
  const [imageURL, setImageURL] = useState("");
  const [uploadedImage, setUploadedImage] = useState();
  const router = useRouter();
  // const [images, setImages] = useState([]);

  const [imageName, setImageName] = useState("");
  const [loading, setLoading] = useState(false);

  const user = useUser();
  const supabase = useSupabaseClient();

  useEffect(() => {
    if (!user) {
      setLoading(true);
      router.push("/");
    }
    console.log("Current user: ", user);
  }, [user]);

  // async function getImages() {
  //   const { data, error } = await supabase.storage
  //     .from("images")
  //     .list(user?.id + "/", {
  //       limit: 100,
  //       offset: 0,
  //       sortBy: { column: "name", order: "asc" },
  //     }); // Cooper/
  //   // data: [ image1, image2, image3 ]
  //   // image1: { name: "subscribeToCooperCodes.png" }

  //   // to load image1: CDNURL.com/subscribeToCooperCodes.png -> hosted image

  //   if (data !== null) {
  //     setImages(data);
  //   } else {
  //     alert("Error loading images");
  //     console.log(error);
  //   }
  // }

  async function uploadImage() {
    console.log("first name: ", imageName);

    const { data, error } = await supabase.storage
      .from("images")
      .upload(user.id + "/" + imageName, uploadedImage);

    if (!data) {
      console.log(error);
    }
  }

  const handleChange = async () => {
    let input = document.getElementById("capture");
    setImageURL(window.URL.createObjectURL(input.files[0]));
    setShowImage(true);
    setUploadedImage(input.files[0]);

    const _imageName = uuidv4();
    setImageName(_imageName);
  };

  async function signOut() {
    const { error } = await supabase.auth.signOut();
  }

  async function sendEmail() {
    setImageURL("");
    setShowImage(false);
    setLoading(true);

    await uploadImage();

    const _imageURL = CDNURL + user.id + "/" + imageName;
    console.log("url: ", _imageURL);

    try {
      await fetch(URL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(_imageURL),
      });

      await signOut();
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

      {loading && (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" />
        </View>
      )}

      {isMobile && !loading && (
        <View
          style={{
            flex: 1,
            marginTop: 24,
          }}
        >
          <View
            style={{
              flex: 1,
              borderColor: "gray",
              borderWidth: 1,
              borderRadius: "10px",
            }}
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
                  Click anywhere to activate Camera
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

          <View
            style={{
              marginVertical: 24,
              flex: 1,
            }}
          >
            {showImage && (
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <Image
                  style={{
                    width: 200,
                    height: 200,
                    alignSelf: "center",
                    borderRadius: 12,
                  }}
                  source={{
                    uri: imageURL,
                  }}
                />
              </View>
            )}
          </View>

          <View style={{ marginBottom: 32 }}>
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
