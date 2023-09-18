import { Ionicons } from "@expo/vector-icons";
import "CORE/i18n/conf";
import { useState } from "react";
import { ActivityIndicator } from "react-native";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Label,
  Progress,
  RadioGroup,
  Sheet,
  SizeTokens,
  Stack,
  Text,
  TextArea,
  XStack,
  YStack,
} from "tamagui";
import RNRestart from "react-native-restart";
import { I18nManager } from "react-native";

export default function App() {
  const [position, setPosition] = useState(0);
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);

  return (
    <Stack margin={10}>
      <Checkbox native>
        <Checkbox.Indicator backgrounded circular>
          <Text>Checkbox</Text>
        </Checkbox.Indicator>
      </Checkbox>
      <Form onSubmit={() => ""}>
        <Form.Trigger asChild>
          <Button
            backgroundColor={"#43cd83"}
            my={10}
            color={"#000000"}
            fontWeight={"300"}
            onPress={() => {
              setModal(true);
              setOpen(true);
            }}>
            Submit
          </Button>
        </Form.Trigger>
      </Form>
      <Stack flexDirection="row" justifyContent={"space-between"}>
        <Button
          backgroundColor={"#43cd83"}
          my={10}
          color={"#000000"}
          fontWeight={"300"}
          icon={<Ionicons name="add" size={20} color={"#000"} />}>
          ICON
        </Button>
        <Button
          backgroundColor={"#43cd83"}
          my={10}
          color={"#000000"}
          fontWeight={"300"}
          icon={<Ionicons name="add" size={20} color={"#000"} />}
        />
        <Button
          backgroundColor={"#43cd83"}
          my={10}
          color={"#000000"}
          fontWeight={"300"}
          icon={<ActivityIndicator />}>
          Loading
        </Button>
      </Stack>
      <TextArea
        adjustsFontSizeToFit
        fontSize={20}
        backgroundColor={`$yellow10Light`}
      />
      <Sheet
        forceRemoveScrollEnabled={open}
        modal={modal}
        open={open}
        onOpenChange={setOpen}
        snapPoints={[85, 50, 25]}
        dismissOnSnapToBottom
        position={position}
        onPositionChange={setPosition}
        zIndex={100_000}>
        <Sheet.Overlay backgroundColor={"#ec000044"} />
        <Sheet.Handle />
        <Sheet.Frame
          flex={1}
          justifyContent="center"
          alignItems="center"
          backgroundColor={"#ffffffbc"}>
          <Input width={200} />
        </Sheet.Frame>
      </Sheet>
      <Progress value={70} my={10} scaleX={I18nManager.isRTL ? -1 : 1}>
        <Progress.Indicator animation={"lazy"} backgroundColor={"#43cd83"} />
      </Progress>
      <RadioGroup defaultValue="3" name="form">
        <YStack width={300} alignItems="center" space="$2">
          <RadioGroupItemWithLabel size="$3" value="2" label="Second value" />
          <RadioGroupItemWithLabel size="$4" value="3" label="Third value" />
          <RadioGroupItemWithLabel size="$5" value="4" label="Fourth value" />
        </YStack>
      </RadioGroup>
      <Button
        backgroundColor={"#43cd83"}
        my={10}
        color={"#000000"}
        fontWeight={"300"}
        onPress={() => {
          I18nManager.forceRTL(!I18nManager.isRTL);
          RNRestart.Restart();
        }}>
        Restart
      </Button>
    </Stack>
  );
}

export function RadioGroupItemWithLabel(props: {
  size: SizeTokens;
  value: string;
  label: string;
}) {
  const id = `radiogroup-${props.value}`;
  return (
    <XStack width={300} alignItems="center" space="$4">
      <RadioGroup.Item value={props.value} id={id} size={props.size}>
        <RadioGroup.Indicator />
      </RadioGroup.Item>

      <Label size={props.size} htmlFor={id}>
        {props.label}
      </Label>
    </XStack>
  );
}
