import { Modal, TouchableOpacity, Platform } from "react-native";
import { Text } from "../Text";
import { Form, Input, ModalBody, Overlay } from "./styles";
import { Header } from "./styles";
import { Close } from "../Icons/Close";
import { Button } from "../Button";

interface props {
  visible: boolean;
  handleCloseModal: () => void;
}

export function TableModal({ visible, handleCloseModal }: props) {
  return (
    <Modal visible={visible} transparent>
      <Overlay behavior={Platform.OS === "android" ? "height" : "padding"}>
        <ModalBody>
          <Header>
            <Text weight="600">Informe a mesa</Text>
            <TouchableOpacity onPress={handleCloseModal}>
              <Close color="#666" />
            </TouchableOpacity>
          </Header>
          <Form>
            <Input
              placeholder="Número da mesa"
              placeholderTextColor="#666"
              keyboardType="number-pad"
            />
            <Button onPress={() => alert("ok")} title="Salvar" />
          </Form>
        </ModalBody>
      </Overlay>
    </Modal>
  );
}
