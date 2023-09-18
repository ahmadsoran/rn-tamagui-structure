import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <View>
      <Link href={"/home/modal"}>
        <Text>Home</Text>
      </Link>
    </View>
  );
}
