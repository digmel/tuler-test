import React, { useState, useEffect } from "react";
import { Screen } from "../components";
import { View, Text, Image, Button } from "react-native";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { usePlatform } from "../hooks";
import { TextInput } from "react-native-web";

export default function App() {
  const { isMobile } = usePlatform();
  const router = useRouter();
  const user = useUser();
  const supabase = useSupabaseClient();

  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (user) {
      console.log("Current user: ", user);
      // getImages();
    }
  }, [user]);

  const handleStart = async () => {
    await signUp(email);
    await login(email);

    setEmail("");
  };

  async function signUp(email) {
    const { error } = await supabase.auth.signUp({
      email: email,
      password: "12345678",
    });

    if (error) {
      console.log("Error when sign up", error);
      setError("Please use another email address.");
    } else {
      router.push("/main");
      console.log("New user created: ", email);
    }
  }

  async function login(email) {
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: "12345678",
    });

    if (error) {
      setError("Please use another email address.");
      console.log("Error when login", error);
      console.log(error);
    } else {
      console.log("User is logged in with: ", email);
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
        <View style={{ flex: 1, justifyContent: "center" }}>
          <View style={{ alignSelf: "center" }}>
            <Text style={{ fontSize: 24, fontWeight: 600, marginBottom: 36 }}>
              Hi there!
            </Text>
          </View>

          <Text
            style={{
              fontSize: 18,
              fontWeight: 300,
            }}
          >
            Email:
          </Text>

          <View>
            <TextInput
              onChange={(ev) => setEmail(ev.target.value)}
              style={{
                height: 36,
                borderWidth: 0.5,
                borderColor: "gray",
                padding: 4,
                marginVertical: 12,
                borderRadius: 8,
              }}
            />
          </View>

          {error && (
            <Text
              style={{
                fontSize: 14,
                fontWeight: 300,
                color: "red",
              }}
            >
              {error}
            </Text>
          )}

          <View style={{ marginTop: 32 }}>
            <Button title="Start" color="blue" onPress={handleStart}></Button>
          </View>
        </View>
      )}
    </Screen>
  );
}
