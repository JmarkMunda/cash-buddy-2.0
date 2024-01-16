import React from "react";
import Container from "./Container";
import {
  Image,
  StyleSheet,
  ImageSourcePropType,
  Dimensions,
  StyleProp,
  ViewStyle,
  ImageStyle,
} from "react-native";
import Text from "./Text";
import { useAppTheme } from "../utils/theme";
import AppStyles from "../utils/styles";

interface IEmpty {
  source?: ImageSourcePropType;
  title: string;
  description?: string;
  containerStyles?: StyleProp<ViewStyle>;
  imageStyles?: StyleProp<ImageStyle>;
}

const Empty = ({
  source,
  title,
  description,
  containerStyles,
  imageStyles,
}: IEmpty) => {
  const { colors } = useAppTheme();

  return (
    <Container style={[styles.container, containerStyles]}>
      {source && <Image source={source} style={[styles.image, imageStyles]} />}
      <Text variant="titleLarge">{title}</Text>
      <Text variant="bodyLarge" color={colors.outline}>
        {description}
      </Text>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...AppStyles.flex_center,
    backgroundColor: "transparent",
  },
  image: {
    width: Dimensions.get("window").width / 2,
    height: Dimensions.get("window").height / 4,
    marginVertical: 8,
  },
});

export default Empty;
