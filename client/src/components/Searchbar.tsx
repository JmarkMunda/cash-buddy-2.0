import React from "react";
import {
  Searchbar as PaperSearchbar,
  SearchbarProps,
} from "react-native-paper";
import { useAppTheme } from "../utils/theme";

interface ISearchbar extends SearchbarProps {
  value: string;
  onChangeText: (text: string) => void;
  onClearIconPress: () => void;
  placeholder?: string;
}

const Searchbar = ({
  value,
  onChangeText,
  placeholder,
  onClearIconPress,
  ...props
}: ISearchbar) => {
  const { colors } = useAppTheme();

  return (
    <PaperSearchbar
      value={value}
      placeholder={placeholder}
      placeholderTextColor={colors.outline}
      iconColor={colors.outline}
      onChangeText={onChangeText}
      onClearIconPress={onClearIconPress}
      style={{
        backgroundColor: colors.outlineVariant,
        flex: 1,
        borderRadius: 8,
      }}
      {...props}
    />
  );
};

export default Searchbar;
