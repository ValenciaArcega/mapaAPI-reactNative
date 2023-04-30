import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Home } from "./src/screens/Home";
import { Map } from "./src/screens/Map";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name='Map'
          component={Map}
          options={{ headerShown: false, animation: "fade" }}>
        </Stack.Screen>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{ headerShown: false, animation: "fade" }}>
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

