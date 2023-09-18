import { createAnimations } from "@tamagui/animations-react-native";
import { createMedia } from "@tamagui/react-native-media-driver";
import { shorthands } from "@tamagui/shorthands";
import { themes, tokens } from "@tamagui/themes";
import { createFont, createTamagui } from "tamagui";

const animations = createAnimations({
  bouncy: {
    type: "spring",
    damping: 10,
    mass: 0.9,
    stiffness: 100,
  },
  lazy: {
    type: "spring",
    damping: 20,
    stiffness: 60,
  },
  quick: {
    type: "spring",
    damping: 20,
    mass: 1.2,
    stiffness: 250,
  },
});

const PoppinsFont = createFont({
  family: "Poppins",
  size: {
    1: 12,
    2: 14,
    3: 15,
    4: 16,
    5: 18,
    6: 20,
    7: 24,
    8: 32,
    9: 40,
    10: 48,
    11: 56,
    12: 64,
    true: 16,
  },
  lineHeight: {
    1: 16,
    2: 20,
    3: 24,
    4: 28,
    5: 32,
    6: 36,
    7: 40,
    8: 48,
    9: 56,
    10: 64,
    11: 72,
    12: 80,
    true: 1.2,
  },
  weight: {
    1: "100",
    2: "200",
    3: "300",
    4: "400",
    5: "500",
    6: "600",
    7: "700",
    8: "800",
    9: "900",
  },
  letterSpacing: {
    1: 0,
    2: -1,
    // 3 will be -1
  },
  // (native) swap out fonts by face/style
  face: {
    100: { normal: "Poppins-Thin" },
    200: { normal: "Poppins-Light" },
    300: { normal: "Poppins-Regular" },
    400: { normal: "Poppins-Medium" },
    500: { normal: "Poppins-SemiBold" },
    600: { normal: "Poppins-Bold" },
    700: { normal: "Poppins-ExtraBold" },
    800: { normal: "Poppins-Black" },
  },
});

const config = createTamagui({
  animations,
  defaultTheme: "dark",
  shouldAddPrefersColorThemes: false,
  themeClassNameOnRoot: false,
  shorthands,
  fonts: {
    body: PoppinsFont,
    heading: PoppinsFont,
  },
  themes,
  tokens,
  media: createMedia({
    xxxs: { maxWidth: 190 },
    xxs: { maxWidth: 200 },
    xs: { maxWidth: 290 },
    sm: { maxWidth: 320 },
    md: { maxWidth: 420 },
    lg: { maxWidth: 768 },
    xl: { maxWidth: 1024 },
  }),
});

export type AppConfig = typeof config;

declare module "tamagui" {
  // overrides TamaguiCustomConfig so your custom types
  // work everywhere you import `tamagui`
  interface TamaguiCustomConfig extends AppConfig {}
}

export default config;
