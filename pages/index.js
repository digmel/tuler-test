import { Screen } from "../components";
import { Text } from "react-native";

export default function App({ isMobile }) {
  return (
    <Screen isHome={true} isMobile={isMobile}>
      <Text>Hi there</Text>
    </Screen>
  );
}
