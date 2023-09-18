import { AppState, AppStateStatus } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SWRConfig } from "swr";
import { Tabs } from "expo-router";
import useCachedResources from "CORE/hooks/useCachedResources";
import { TamaguiProvider } from "tamagui";
import config from "tamagui.config";
export default function RootLayout() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SWRConfig
        value={{
          provider: () => new Map(),
          isVisible: () => {
            return true;
          },
          initFocus(callback) {
            let appState = AppState.currentState;

            const onAppStateChange = (nextAppState: AppStateStatus) => {
              /* If it's resuming from background or inactive mode to active one */
              if (
                appState.match(/inactive|background/) &&
                nextAppState === "active"
              ) {
                callback();
              }
              appState = nextAppState;
            };

            // Subscribe to the app state change events
            const subscription = AppState.addEventListener(
              "change",
              onAppStateChange
            );

            return () => {
              subscription.remove();
            };
          },
        }}>
        <SafeAreaProvider>
          <TamaguiProvider config={config}>
            <Tabs>
              <Tabs.Screen
                // Name of the route to hide.
                name="index"
                options={{
                  // This tab will no longer show up in the tab bar.
                  href: null,
                }}
              />
            </Tabs>
          </TamaguiProvider>
        </SafeAreaProvider>
      </SWRConfig>
    );
  }
}
