import { TouchableOpacity } from "react-native";
import { Text } from "../Text";
import { Container, Content, OrderHeader } from "./styles";

interface props {
  selectedTable: string;
}

export function Header({ selectedTable }: props) {
  return (
    <Container>
      {!selectedTable && (
        <>
          <Text size={14} opacity={0.9}>
            Bem Vindo (a) ao
          </Text>
          <Text size={24} weight="700">
            WAITER<Text size={24}>APP</Text>
          </Text>
        </>
      )}

      {selectedTable && (
        <>
          <Content>
            <OrderHeader>
              <Text size={24} weight="600">
                Pedido
              </Text>
              <TouchableOpacity>
                <Text color="#d73035" weight="600" size={14}>
                  Cancelar pedidoo
                </Text>
              </TouchableOpacity>
            </OrderHeader>
          </Content>
        </>
      )}
    </Container>
  );
}
