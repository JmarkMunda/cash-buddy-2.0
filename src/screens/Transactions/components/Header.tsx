import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useAppTheme } from "../../../utils/theme";
import { useTransactionsStore } from "../../../zustand/transactions/store";
import Searchbar from "../../../components/Searchbar";
import ButtonContainer from "../../../components/ButtonContainer";
import Text from "../../../components/Text";

const Header = ({ onFilterPress }) => {
  const [searchText, setSearchText] = useState("");
  const [applyFilters, searchByNote] = useTransactionsStore(
    ({ applyFilters, searchByNote }) => [applyFilters, searchByNote]
  );
  const { colors } = useAppTheme();

  const handleSearch = () => {
    applyFilters(searchText ? { searchText } : null);
    searchByNote(searchText);
  };

  return (
    <View style={styles.container}>
      <Searchbar
        value={searchText}
        onChangeText={setSearchText}
        placeholder="Search by note..."
        onSubmitEditing={handleSearch}
        onClearIconPress={() => applyFilters(null)}
      />
      <ButtonContainer containerStyle={styles.filter} onPress={onFilterPress}>
        <AntDesign name="filter" size={24} color={colors.outline} />
        <Text variant="bodyMedium" color={colors.outline}>
          Filter
        </Text>
      </ButtonContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    gap: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  filter: {
    flexDirection: "row",
    marginVertical: 8,
  },
});

export default Header;
