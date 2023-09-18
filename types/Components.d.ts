import { StyledProps } from "nativewind";
import {
  ButtonProps as RNPButtonProps,
  TextInputProps as RNTextInputProps,
  IconButtonProps,
} from "react-native-paper";
import {
  ViewProps as RNViewProps,
  TouchableOpacityProps as RNTouchableOpacityProps,
  PressableProps as RNPressableProps,
  TextProps as RNTextProps,
} from "react-native";

export type TextProps = StyledProps<RNTextProps> & {
  fontSize?: number;
};
export type ButtonProps = StyledProps<RNPButtonProps> & {
  labelSize?: number;
};
export type ViewProps = StyledProps<RNViewProps>;
export type IconButtonProps = StyledProps<IconButtonProps>;
export type TouchableOpacityProps = StyledProps<RNTouchableOpacityProps>;
export type PressableProps = StyledProps<RNPressableProps>;
export type TextInputProps = StyledProps<RNTextInputProps>;
