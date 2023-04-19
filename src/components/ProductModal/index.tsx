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
  handeCloseModal: () => void;
  product: null | ProductProps;
}

export function ProductModal({ visible, handeCloseModal, product }: props) {
  console.log(product);
  if (!product) {
    return null;
  }
  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={handeCloseModal}
    >
      <Image
        source={{
          uri: `http://192.168.1.152:3001/uploads/${product.imagePath}`,
        }}
      >
        <CloseButton onPress={handeCloseModal}>
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
              Ingredientes
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
            onPress={() => alert("adicionou")}
            title="Adicionar ao pedido"
          />
        </FooterContainer>
      </Footer>
    </Modal>
  );
}
