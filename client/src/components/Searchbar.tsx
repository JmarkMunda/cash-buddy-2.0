import React from "react";
import {
  Searchbar as PaperSearchbar,
  SearchbarProps,
  useTheme,
} from "react-native-paper";

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
  const { colors } = useTheme();

  return (
    <PaperSearchbar
      value={value}
      placeholder={placeholder}
      placeholderTextColor={colors.outline}
      iconColor={colors.outline}
      onChangeText={onChangeText}
      onClearIconPress={onClearIconPress}
      style={{
        backgroundColor: colors.inverseOnSurface,
        flex: 1,
        borderRadius: 8,
      }}
      {...props}
    />
  );
};

export default Searchbar;
