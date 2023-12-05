import React, { forwardRef, useState } from "react";
import { Chip, useTheme } from "react-native-paper";
import Modalize from "../../../components/Modalize";
import Text from "../../../components/Text";
import { View, StyleSheet } from "react-native";
import { defaultTags } from "../../../utils/constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import Button from "../../../components/Button";
import { useWalletStore } from "../../../zustand/wallet/store";

interface IFilterModal {
  handleClose?: () => void;
}

const FilterModal = forwardRef((props: IFilterModal, ref) => {
  const [filterByTags, applyFilters] = useWalletStore(
    ({ filterByTags, applyFilters }) => [filterByTags, applyFilters]
  );
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const { colors } = useTheme();

  const handleFilterSelect = (value: string) => {
    const copyFilters = [...selectedTags];
    const index = copyFilters.indexOf(value);

    if (copyFilters.includes(value)) {
      copyFilters.splice(index, 1);
    } else {
      copyFilters.push(value);
    }
    setSelectedTags(copyFilters);
  };

  const handleApplyFilter = () => {
    applyFilters(selectedTags.length ? { tags: selectedTags } : null);
    filterByTags(selectedTags);
  };

  const handleResetFilter = () => {
    applyFilters(null);
    setSelectedTags([]);
    // filterByTags([])
  };

  // TODO: Sorting (ASC, DESC)

  return (
    <Modalize
      ref={ref}
      HeaderComponent={
        <TouchableOpacity
          style={{ alignSelf: "flex-end" }}
          hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}>
          <AntDesign name="closesquare" size={24} color={colors.onBackground} />
        </TouchableOpacity>
      }>
      <Text variant="labelLarge">Tags</Text>
      <View style={styles.tagsContainer}>
        {defaultTags.map((tag) => (
          <Chip
            key={tag.label}
            mode={selectedTags.indexOf(tag.value) > -1 ? "flat" : "outlined"}
            onPress={() => handleFilterSelect(tag.value)}>
            {tag.label}
          </Chip>
        ))}
      </View>

      <Button
        mode="contained-tonal"
        style={{ marginVertical: 16 }}
        onPress={handleApplyFilter}>
        Apply
      </Button>
      <Button
        mode="outlined"
        textColor={colors.outline}
        onPress={handleResetFilter}>
        Reset
      </Button>
    </Modalize>
  );
});

const styles = StyleSheet.create({
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginVertical: 8,
  },
});

export default FilterModal;
