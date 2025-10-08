import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Entrega } from "./src/Modelos/Entrega";
import { NavigationContainer } from "@react-navigation/native";
import TelaLogin from "./src/Telas/TelaLogin";
import TelaHome from "./src/Telas/TelaHome";
import TelaListaEntrega from "./src/Telas/TelaListaEntrega";
import TelaMapaRotas from "./src/Telas/TelaMapaRotas";

export type RootStackParamList = {
  Login: undefined,
  Home: {userName: string},
  Entregas: undefined,
  Rotas: {entregas: Entrega[]}
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: { backgroundColor:'#0f01a5ff'},
          headerTintColor: "#ffffff",
          headerTitleStyle: { fontWeight:"bold" }
        }}>
        <Stack.Screen name="Login" component={TelaLogin} options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={TelaHome} options={{title:"Bem Vindo"}}/>
        <Stack.Screen name="Entregas" component={TelaListaEntrega} options={{title:"Lista de Entregas"}}/>
        <Stack.Screen name="Rotas" component={TelaMapaRotas} options={{title:"Mapa de Rotas"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}