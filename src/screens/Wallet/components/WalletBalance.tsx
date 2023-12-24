import React, { useEffect } from "react";
import Card from "../../../components/Card";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity, View } from "react-native";
import Text from "../../../components/Text";
import formatDate from "../../../utils/formatDate";
import { useWalletStore } from "../../../zustand/wallet/store";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const WalletBalance = () => {
  const [cashBalance, bankBalance] = useWalletStore((state) => [
    state.cashBalance,
    state.bankBalance,
  ]);
  const animatedWidth = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => ({
    width: withSpring(animatedWidth.value),
  }));

  const animateWalletHandler = () => {
    animatedWidth.value += animatedWidth.value + 80;
  };

  useEffect(() => {
    animateWalletHandler();
  }, []);

  return (
    <Card shadow="lg" style={{ padding: 0 }}>
      <LinearGradient
        colors={["#bb8f4d", "#805d29"]}
        style={{ borderRadius: 16, padding: 8, position: "relative" }}>
        <View
          style={{
            borderWidth: 1,
            borderRadius: 16,
            padding: 16,
            borderColor: "white",
            borderStyle: "dashed",
          }}>
          <TouchableOpacity onPress={animateWalletHandler}>
            <Text variant="titleSmall" color="white">
              Wallet Balance:
            </Text>
          </TouchableOpacity>
          <Text
            variant="headlineMedium"
            color="white"
            style={[{ fontWeight: "bold", marginVertical: 4 }]}>
            {`P ${cashBalance}`}
          </Text>

          <Text variant="labelSmall" color="white" style={{ marginTop: 8 }}>
            {formatDate(new Date(), "l")}
          </Text>
        </View>

        <Animated.View
          style={[
            {
              position: "absolute",
              top: "50%",
              right: 0,
              backgroundColor: "#886838",
              height: 50,
              borderTopLeftRadius: 16,
              borderBottomLeftRadius: 16,
              justifyContent: "center",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.3,
              shadowRadius: 4.65,
              elevation: 8,
            },
            animatedStyles,
          ]}>
          <View
            style={{
              borderRadius: 99,
              borderWidth: 1,
              borderColor: "rgb(75, 75, 75)",
              backgroundColor: "rgb(173, 173, 173)",
              height: 25,
              width: 25,
              marginLeft: 8,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.3,
              shadowRadius: 4.65,
              elevation: 8,
            }}
          />
        </Animated.View>
      </LinearGradient>
    </Card>
  );
};

export default WalletBalance;
