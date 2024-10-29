
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";

const Layout = () => {
  return (
    <>
     <StatusBar style="dark" />
      <Stack>
        <Stack.Screen name="welcome" options={{ headerShown: false }} />
        <Stack.Screen name="sign-up" options={{ headerShown: false }} />
        <Stack.Screen name="sign-in" options={{ headerShown: false }} />
      </Stack>
    </>
  );
};

export default Layout;
