import { TouchableOpacity } from "react-native";
import { Text } from "../Text";
import { Container, Content, OrderHeader, Table } from "./styles";

interface props {
  selectedTable: null | string;
  handleCancelOrder: () => void;
}

export function Header({ selectedTable, handleCancelOrder }: props) {
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
              <TouchableOpacity onPress={handleCancelOrder}>
                <Text color="#d73035" weight="600" size={14}>
                  Cancelar pedido
                </Text>
              </TouchableOpacity>
            </OrderHeader>
            <Table>
              <Text color="#666">Mesa {selectedTable}</Text>
            </Table>
          </Content>
        </>
      )}
    </Container>
  );
}
