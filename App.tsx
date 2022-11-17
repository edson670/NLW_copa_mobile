import { NativeBaseProvider, StatusBar } from "native-base";
import { Loading } from './src/components/Loading';
import { New } from './src/screens/New';

import { THEME } from './src/styles/theme'
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { AuthContextProvider } from "./src/contexts/AuthContext";

export default function App() {
  const [fontsLoad] = useFonts({ Roboto_400Regular, Roboto_500Medium, Roboto_700Bold })

  return (
    <NativeBaseProvider theme={THEME}>
      <AuthContextProvider>

        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        {fontsLoad ? <New /> : <Loading />}
      </AuthContextProvider>
    </NativeBaseProvider>
  );
}


