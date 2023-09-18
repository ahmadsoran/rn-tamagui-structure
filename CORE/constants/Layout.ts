import { Dimensions, I18nManager } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const isRTL = I18nManager.getConstants().isRTL;
export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
  isRTL,
};
