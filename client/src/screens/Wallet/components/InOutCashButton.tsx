import React from "react";
import ButtonContainer from "../../../components/ButtonContainer";
import {
  Image,
  StyleSheet,
  StyleProp,
  ImageStyle,
  ImageSourcePropType,
} from "react-native";
import Container from "../../../components/Container";
import AppStyles from "../../../utils/styles";
import spacings from "../../../utils/spacings";
import Text from "../../../components/Text";
import { useTheme } from "react-native-paper";

interface IButton {
  label: string;
  image: ImageSourcePropType;
  imageStyles?: StyleProp<ImageStyle>;
  onPress: () => void;
}

const InOutCashButton = ({ label, image, imageStyles, onPress }: IButton) => {
  const { colors } = useTheme();
  return (
    <ButtonContainer onPress={onPress}>
      <Container
        intensity={50}
        radius={16}
        style={[AppStyles.flex_center, spacings.p24]}>
        <Image source={image} style={[styles.image, imageStyles]} />
        <Text variant="labelLarge" color={colors.inverseSurface}>
          {label}
        </Text>
      </Container>
    </ButtonContainer>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
});

export default InOutCashButton;
