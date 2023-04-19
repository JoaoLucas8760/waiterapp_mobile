import { ActivityIndicator } from "react-native";
import { Text } from "../Text";
import { Container } from "./styles";

interface props {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
}

export function Button({ title, onPress, disabled, loading }: props) {
  return (
    <Container onPress={onPress} disabled={disabled || loading}>
      {!loading && (
        <Text weight="600" color="#fff">
          {title}
        </Text>
      )}

      {loading && <ActivityIndicator color="#fff" />}
    </Container>
  );
}
