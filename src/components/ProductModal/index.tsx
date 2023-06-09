import { FlatList, Modal } from "react-native";
import { ProductProps } from "../../types/Product";
import {
  CloseButton,
  Footer,
  FooterContainer,
  Header,
  Image,
  Ingredient,
  IngredientsContainer,
  ModalBody,
  PriceContainer,
} from "./styles";
import { Close } from "../Icons/Close";
import { Text } from "../Text";
import { formatCurrency } from "../../utils/formatCurrency";
import { Button } from "../Button";

interface props {
  visible: boolean;
  handleCloseModal: () => void;
  product: null | ProductProps;
  onAddToCart: (product: ProductProps) => void;
}

export function ProductModal({
  visible,
  handleCloseModal,
  product,
  onAddToCart,
}: props) {
  if (!product) {
    return null;
  }
  function handleAddToCart(product: ProductProps) {
    onAddToCart(product!);
    handleCloseModal();
  }
  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={handleCloseModal}
    >
      <Image
        source={{
          uri: `http://192.168.1.152:3002/uploads/${product.imagePath}`,
        }}
      >
        <CloseButton onPress={handleCloseModal}>
          <Close />
        </CloseButton>
      </Image>

      <ModalBody>
        <Header>
          <Text size={24} weight="600">
            {product.name}
          </Text>
          <Text color="#666" style={{ marginTop: 8 }}>
            {product.description}
          </Text>
        </Header>
        {product.ingredients.length > 0 && (
          <IngredientsContainer>
            <Text color="#666" weight="600">
              Ingrediente
            </Text>

            <FlatList
              style={{ marginTop: 16 }}
              data={product.ingredients}
              keyExtractor={(ingredient) => ingredient._id}
              showsVerticalScrollIndicator={false}
              renderItem={({ item: ingredient }) => (
                <Ingredient>
                  <Text>{ingredient.icon}</Text>

                  <Text size={14} color="#666" style={{ marginLeft: 20 }}>
                    {ingredient.name}
                  </Text>
                </Ingredient>
              )}
            />
          </IngredientsContainer>
        )}
      </ModalBody>

      <Footer>
        <FooterContainer>
          <PriceContainer>
            <Text color="#666">Preço</Text>
            <Text size={20} weight="600">
              {formatCurrency(product.price)}
            </Text>
          </PriceContainer>
          <Button
            onPress={() => handleAddToCart(product)}
            title="Adicionar ao pedido"
          />
        </FooterContainer>
      </Footer>
    </Modal>
  );
}
