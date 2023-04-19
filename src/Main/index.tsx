import { useState } from "react";
import { Button } from "../components/Button";
import { Categories } from "../components/Categories";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { TableModal } from "../components/TableModal";
import {
  CategoriesContainer,
  Container,
  Footer,
  FooterContainer,
  MenuContainer,
} from "./styles";
import { Cart } from "../components/Cart";
import { CartItem } from "../types/Cart";
import { products } from "../mocks/products";

export function Main() {
  const [isTableModalVisible, setIsTableModalVisible] = useState(false);
  const [selectedTable, setSelectedTable] = useState<null | string>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { quantity: 1, product: products[0] },
    { quantity: 1, product: products[1] },
  ]);

  function handleSaveTable(table: string) {
    setSelectedTable(table);
    setIsTableModalVisible(false);
  }

  function handleCancelOrder() {
    setSelectedTable(null);
  }
  return (
    <>
      <Container>
        <Header
          selectedTable={selectedTable}
          handleCancelOrder={handleCancelOrder}
        />

        <CategoriesContainer>
          <Categories />
        </CategoriesContainer>

        <MenuContainer>
          <Menu />
        </MenuContainer>
      </Container>
      <Footer>
        <FooterContainer>
          {!selectedTable && (
            <Button
              title="Novo pedido"
              onPress={() => setIsTableModalVisible(true)}
            />
          )}
          {selectedTable && <Cart cartItems={cartItems} />}
        </FooterContainer>
      </Footer>

      <TableModal
        visible={isTableModalVisible}
        handleCloseModal={() => setIsTableModalVisible(false)}
        handleSaveTable={handleSaveTable}
      />
    </>
  );
}
