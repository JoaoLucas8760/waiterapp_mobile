import { Modal, TouchableOpacity, Platform } from "react-native";
import { Text } from "../Text";
import { Form, Input, ModalBody, Overlay } from "./styles";
import { Header } from "./styles";
import { Close } from "../Icons/Close";
import { Button } from "../Button";
import { useState } from "react";

interface props {
  visible: boolean;
  handleCloseModal: () => void;
  handleSaveTable: (table: string) => void;
}

export function TableModal({
  visible,
  handleCloseModal,
  handleSaveTable,
}: props) {
  const [table, setTable] = useState("");

  function onSave() {
    setTable("");
    handleSaveTable(table);
    handleCloseModal();
  }
  return (
    <Modal visible={visible} transparent animationType="fade">
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
              onChangeText={setTable}
              value={table}
            />
            <Button
              onPress={onSave}
              title="Salvar"
              disabled={table.length === 0}
            />
          </Form>
        </ModalBody>
      </Overlay>
    </Modal>
  );
}
