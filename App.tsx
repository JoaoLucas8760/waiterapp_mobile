import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const [isFontsLoaded] = useFonts({
    "GeneralSans-400": require("./src/assets/fonts/GeneralSans-Regular.otf"),
    " GeneralSans-600": require("./src/assets/fonts/GeneralSans-Semibold.otf"),
    "GeneralSans-700": require("./src/assets/fonts/GeneralSans-Bold.otf"),
  });

  if (!isFontsLoaded) {
    return (
      <View style={styles.notLoaded}>
        <Text>Loading...</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  notLoaded: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
