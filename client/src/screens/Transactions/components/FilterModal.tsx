import React, { forwardRef, useState } from "react";
import { Chip } from "react-native-paper";
import Modalize from "../../../components/Modalize";
import Text from "../../../components/Text";
import { View } from "react-native";
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

  return (
    <Modalize
      ref={ref}
      HeaderComponent={
        <TouchableOpacity
          style={{ alignSelf: "flex-end" }}
          hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}>
          <AntDesign name="closesquare" size={24} color="black" />
        </TouchableOpacity>
      }>
      <Text variant="labelLarge">Tags</Text>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 8,
        }}>
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
        style={{ marginTop: 16 }}
        onPress={handleApplyFilter}>
        Apply
      </Button>
    </Modalize>
  );
});

export default FilterModal;
