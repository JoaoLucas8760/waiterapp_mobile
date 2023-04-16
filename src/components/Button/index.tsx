import { Text } from "../Text";
import { Container } from "./styles";

interface props {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

export function Button({ title, onPress, disabled = false }: props) {
  return (
    <Container onPress={onPress} disabled={disabled}>
      <Text weight="600" color="#fff">
        {title}
      </Text>
    </Container>
  );
}
