import { View, Text } from "react-native";
import React from "react";
import { useSearchParams } from "expo-router";

export default function HomeById() {
  const p = useSearchParams();
  console.log(p);
  return (
    <View>
      <Text>HomeById</Text>
    </View>
  );
}
