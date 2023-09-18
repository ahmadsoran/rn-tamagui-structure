import "expo-router/entry";

if (__DEV__) {
  import("react-native-network-logger").then((r) => r.startNetworkLogging());
}
