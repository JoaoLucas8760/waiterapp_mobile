import { FlatList } from "react-native";
import { categories } from "../../mocks/categories";
import { Text } from "../Text";
import { Category, Icon } from "./styles";
import { useState } from "react";

export function Categories() {
  const [selectedCategory, setSelectedCategory] = useState<String | null>(null);

  function handleSelectCategory(categoryId: string) {
    const category = selectedCategory === categoryId ? null : categoryId;
    setSelectedCategory(category);
  }
  return (
    <>
      <FlatList
        horizontal
        contentContainerStyle={{ paddingRight: 24 }}
        showsHorizontalScrollIndicator={false}
        data={categories}
        keyExtractor={(category) => category._id}
        renderItem={({ item: category }) => {
          const isSelected = selectedCategory === category._id;
          return (
            <Category onPress={() => handleSelectCategory(category._id)}>
              <Icon>
                <Text opacity={isSelected ? 1 : 0.5}>{category.icon}</Text>
              </Icon>
              <Text opacity={isSelected ? 1 : 0.5} size={14} weight="600">
                {category.name}
              </Text>
            </Category>
          );
        }}
      />
    </>
  );
}
