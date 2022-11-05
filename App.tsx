import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, Text, Center} from "native-base";
import { Loading } from './src/components/Loading';
import { SignIn } from './src/screens/SignIn';

import { THEME } from './src/styles/theme'
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold} from '@expo-google-fonts/roboto'

export default function App() {
  const [fontsLoad ] = useFonts({Roboto_400Regular, Roboto_500Medium, Roboto_700Bold})

  return (
    <NativeBaseProvider theme = {THEME }>

        {fontsLoad ? <SignIn/> : <Loading/>}
        
    </NativeBaseProvider>
  );
}


