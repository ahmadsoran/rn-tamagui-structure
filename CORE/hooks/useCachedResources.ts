import { FontAwesome } from "@expo/vector-icons";
import { storage } from "CORE/util/storage";
import * as Font from "expo-font";
import { useEffect, useState } from "react";
import { ColorSchemeName } from "react-native";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const StorageColorScheme = storage.getString(
    "color_scheme"
  ) as NonNullable<ColorSchemeName>;
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          "Poppins-Regular": require("CORE/assets/fonts/Poppins-Regular.ttf"),
          "Poppins-Medium": require("CORE/assets/fonts/Poppins-Medium.ttf"),
          "Poppins-SemiBold": require("CORE/assets/fonts/Poppins-SemiBold.ttf"),
          "Poppins-Bold": require("CORE/assets/fonts/Poppins-Bold.ttf"),
          "Poppins-ExtraBold": require("CORE/assets/fonts/Poppins-ExtraBold.ttf"),
          "Poppins-Black": require("CORE/assets/fonts/Poppins-Black.ttf"),
          "Poppins-Thin": require("CORE/assets/fonts/Poppins-Thin.ttf"),
          "Poppins-Light": require("CORE/assets/fonts/Poppins-Light.ttf"),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
