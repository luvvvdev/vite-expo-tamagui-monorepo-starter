import { StatusBar } from "expo-status-bar";
import { TamaguiProvider } from "tamagui";
import tamaguiConfig from "../../tamagui.config";
import { AuthScreen } from "core/src/views/auth-screen";

export default function App() {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <StatusBar style="auto" />
      <AuthScreen />
    </TamaguiProvider>
  );
}
