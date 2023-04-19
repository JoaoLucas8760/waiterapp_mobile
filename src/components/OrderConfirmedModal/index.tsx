import { Modal } from "react-native";
import { Container, OkBtn } from "./styles";
import { Text } from "../Text";
import { CheckCircle } from "../Icons/CheckCircle";

interface props {
  visible: boolean;
  onOk: () => void;
}

export function OrderConfirmedModal({ visible, onOk }: props) {
  return (
    <Modal visible={visible} animationType="fade">
      <Container>
        <CheckCircle />
        <Text color="#fff" size={20} weight="600" style={{ marginTop: 12 }}>
          Pedido confirmado
        </Text>
        <Text color="#fff" opacity={0.9} style={{ marginTop: 4 }}>
          O pedido ja entrou na fila de produção!
        </Text>

        <OkBtn onPress={onOk}>
          <Text color="#d73035" weight="600">
            OK
          </Text>
        </OkBtn>
      </Container>
    </Modal>
  );
}
