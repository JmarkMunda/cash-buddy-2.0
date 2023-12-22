import React, { forwardRef, useState } from "react";
import { Chip } from "react-native-paper";
import Modalize from "../../../components/Modalize";
import Text from "../../../components/Text";
import { View, StyleSheet } from "react-native";
import { defaultTags } from "../../../utils/constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import Button from "../../../components/Button";
import { useAppTheme } from "../../../utils/theme";
import { useTransactionsStore } from "../../../zustand/transactions/store";
import SortByButtons from "./SortByButtons";
import SegmentedButtons from "./SegmentedButtons";
import { FilterType } from "../../../zustand/transactions/transactionSlice";

interface IFilterModal {
  handleClose?: () => void;
}

const FilterModal = forwardRef((props: IFilterModal, ref) => {
  const [filterByType, sortBy, filterByTags, applyFilters] =
    useTransactionsStore(
      ({ filterByType, sortBy, filterByTags, applyFilters }) => [
        filterByType,
        sortBy,
        filterByTags,
        applyFilters,
      ]
    );
  const [type, setType] = useState<FilterType["type"]>("all");
  const [sortByValue, setSortByValue] =
    useState<FilterType["sortBy"]>("newest");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const { colors } = useAppTheme();

  const handleTagSelect = (value: string) => {
    const copyTags = [...selectedTags];
    const index = copyTags.indexOf(value);
    if (copyTags.includes(value)) {
      copyTags.splice(index, 1);
    } else {
      copyTags.push(value);
    }
    setSelectedTags(copyTags);
  };

  const handleApplyFilter = () => {
    applyFilters({ tags: selectedTags, sortBy: sortByValue, type });
    filterByType(type);
    sortBy(sortByValue);
    if (selectedTags.length) filterByTags(selectedTags);
  };

  const handleResetFilter = () => {
    applyFilters(null);
    setType("all");
    setSortByValue("newest");
    setSelectedTags([]);
  };

  return (
    <Modalize
      ref={ref}
      HeaderComponent={
        <TouchableOpacity
          style={{ alignSelf: "flex-end" }}
          hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}>
          <AntDesign name="closesquare" size={24} color={colors.text} />
        </TouchableOpacity>
      }>
      <SegmentedButtons value={type} setValue={setType} />
      {/* SORT BY */}
      <SortByButtons
        sortByValue={sortByValue}
        setSortByValue={setSortByValue}
      />
      {/* TAGS */}
      <Text variant="labelLarge">Tags</Text>
      <View style={styles.tagsContainer}>
        {defaultTags.map((tag) => (
          <Chip
            key={tag.label}
            mode={selectedTags.indexOf(tag.value) > -1 ? "flat" : "outlined"}
            onPress={() => handleTagSelect(tag.value)}>
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
