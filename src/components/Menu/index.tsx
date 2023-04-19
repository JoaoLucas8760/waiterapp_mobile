import { FlatList, TouchableOpacity } from "react-native";
import { products } from "../../mocks/products";
import { Text } from "../Text";

import {
  Product,
  ProductDetails,
  ProductImage,
  Separator,
  AddToCartButton,
} from "./styles";
import { formatCurrency } from "../../utils/formatCurrency";
import { PlusCircle } from "../Icons/PlusCircle";
import { ProductModal } from "../ProductModal";
import { useState } from "react";
import { ProductProps } from "../../types/Product";

interface props {
  onAddToCart: (product: ProductProps) => void;
}

export function Menu({ onAddToCart }: props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<null | ProductProps>(
    null
  );

  function handleOpenModal(product: ProductProps) {
    setSelectedProduct(product);
    setIsModalVisible(true);
  }
  return (
    <>
      <ProductModal
        visible={isModalVisible}
        handleCloseModal={() => setIsModalVisible(false)}
        product={selectedProduct}
        onAddToCart={onAddToCart}
      />
      <FlatList
        data={products}
        style={{ marginTop: 32 }}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        keyExtractor={(product) => product._id}
        ItemSeparatorComponent={Separator}
        renderItem={({ item: product }) => (
          <Product onPress={() => handleOpenModal(product)}>
            <ProductImage
              source={{
                uri: `http://192.168.1.152:3001/uploads/${product.imagePath}`,
              }}
            />
            <ProductDetails>
              <Text weight="600">{product.name}</Text>
              <Text size={14} color="#666" style={{ marginVertical: 8 }}>
                {product.description}
              </Text>
              <Text size={14} weight="600">
                {formatCurrency(product.price)}
              </Text>
            </ProductDetails>

            <AddToCartButton onPress={() => onAddToCart(product)}>
              <PlusCircle />
            </AddToCartButton>
          </Product>
        )}
      />
    </>
  );
}
