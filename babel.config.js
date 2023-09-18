// @ts-nocheck
module.exports = function (api) {
  api.cache(true);
  return {
    env: {
      production: {
        presets: ["babel-preset-expo"],
        plugins: [
          "react-native-reanimated/plugin",
          "transform-remove-console",
          require.resolve("expo-router/babel"),

          [
            // modele-resolver use for ability of using absloute paths
            "module-resolver",
            {
              extensions: [
                ".js",
                ".jsx",
                ".ts",
                ".tsx",
                ".android.js",
                ".android.tsx",
                ".ios.js",
                ".ios.tsx",
              ],
              root: ["./"],
            },
          ],
          [
            "@tamagui/babel-plugin",
            {
              components: ["tamagui"],
              config: "./tamagui.config.ts",
              logTimings: true,
            },
          ],
          [
            "transform-inline-environment-variables",
            {
              include: "TAMAGUI_TARGET",
            },
          ],
        ],
      },
      development: {
        presets: ["babel-preset-expo"],
        plugins: [
          "react-native-reanimated/plugin",
          require.resolve("expo-router/babel"),
          [
            // modele-resolver use for ability of using absloute paths
            "module-resolver",
            {
              extensions: [
                ".js",
                ".jsx",
                ".ts",
                ".tsx",
                ".android.js",
                ".android.tsx",
                ".ios.js",
                ".ios.tsx",
              ],
              root: ["./"],
            },
          ],
          [
            "@tamagui/babel-plugin",
            {
              components: ["tamagui"],
              config: "./tamagui.config.ts",
              logTimings: true,
            },
          ],
          [
            "transform-inline-environment-variables",
            {
              include: "TAMAGUI_TARGET",
            },
          ],
        ],
      },
    },
  };
};
