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

interface IButton {
  label: string;
  image: ImageSourcePropType;
  imageStyles?: StyleProp<ImageStyle>;
  onPress: () => void;
}

const InOutCashButton = ({ label, image, imageStyles, onPress }: IButton) => {
  return (
    <ButtonContainer onPress={onPress}>
      <Container
        intensity={80}
        radius={16}
        style={[AppStyles.flex_center, spacings.p24]}>
        <Image source={image} style={[styles.image, imageStyles]} />
        <Text category="label" color="#696969">
          {label}
        </Text>
      </Container>
    </ButtonContainer>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 60,
  },
});

export default InOutCashButton;
