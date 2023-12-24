import React from "react";
import Button from "../../../components/Button";
import { Dimensions, Modal, StyleSheet, View } from "react-native";
import ColorPicker, {
  BlueSlider,
  GreenSlider,
  OpacitySlider,
  PreviewText,
  RedSlider,
  Swatches,
  colorKit,
} from "reanimated-color-picker";
import AppStyles from "../../../utils/styles";
import spacings from "../../../utils/spacings";
import Text from "../../../components/Text";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";
import { useAppTheme } from "../../../utils/theme";

const ColorPickerModal = ({ visible, handleSelectColor, handleClose }) => {
  const { colors } = useAppTheme();
  const customSwatches = new Array(6)
    .fill("#fff")
    .map(() => colorKit.randomRgbColor().hex());

  const selectedColor = useSharedValue(customSwatches[0]);
  const bgColor = useAnimatedStyle(() => ({
    backgroundColor: selectedColor.value,
  }));

  const onChangeColor = (color) => {
    selectedColor.value = color.hex;
  };

  const onSelectPress = () => {
    handleSelectColor(selectedColor.value);
    handleClose();
  };

  return (
    <Modal visible={visible} transparent>
      <View
        style={[
          AppStyles.flex_center,
          { backgroundColor: "rgba(0, 0, 0, 0.5)", flex: 1 },
        ]}>
        <View style={styles.contentContainer}>
          <Ionicons
            name="close"
            size={24}
            color={colors.text}
            style={styles.close}
            onPress={handleClose}
          />
          <ColorPicker
            value={selectedColor.value}
            onChange={onChangeColor}
            thumbSize={24}
            sliderThickness={25}
            adaptSpectrum
            boundedThumb>
            <View style={[spacings.my16]}>
              <Text variant="titleMedium">Red</Text>
              <RedSlider style={styles.slider} />

              <Text variant="titleMedium">Green</Text>
              <GreenSlider style={styles.slider} />

              <Text variant="titleMedium">Blue</Text>
              <BlueSlider style={styles.slider} />

              <Text variant="titleMedium">Opacity</Text>
              <OpacitySlider style={styles.slider} />
            </View>
            <Swatches colors={customSwatches} />

            <View style={styles.previewTextContainer}>
              <PreviewText style={{ color: "#707070" }} colorFormat="rgba" />
              <Animated.View style={[styles.pickedColor, bgColor]} />
            </View>
          </ColorPicker>
          <Button onPress={onSelectPress} mode="elevated" style={spacings.my8}>
            Select
          </Button>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: "white",
    padding: 24,
    borderRadius: 16,
  },
  close: {
    alignSelf: "flex-end",
  },
  slider: {
    ...spacings.my8,
    borderRadius: 16,
  },
  previewTextContainer: {
    ...spacings.p8,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#cccc",
  },
  pickedColor: {
    width: 25,
    height: 25,
    borderRadius: 8,
    alignSelf: "center",
    ...spacings.my8,
  },
});

export default ColorPickerModal;
