const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Splashscreen from "./screens/Splashscreen";
import Login from "./screens/Login";
import Dashboard from "./screens/Dashboard";
import Notifikasi from "./screens/Notifikasi";
import AkunSaya from "./screens/AkunSaya";
import Detail from "./screens/Detail";
import Detail2 from "./screens/Detail2";
import Keranjang from "./screens/Keranjang";
import Checkout from "./screens/Checkout";
import Checkout2 from "./screens/Checkout2";
import Chat from "./screens/Chat";
import PesananRiwayat from "./screens/PesananRiwayat";
import PesananDikirim from "./screens/PesananDikirim";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
  const [fontsLoaded] = useFonts({
    Oswald: require("./assets/fonts/Oswald.ttf"),
    Roboto: require("./assets/fonts/Roboto.ttf"),
    "Open Sans Hebrew Condensed": require("./assets/fonts/Open_Sans_Hebrew_Condensed.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 3000);
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Splashscreen"
              component={Splashscreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Dashboard"
              component={Dashboard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Notifikasi"
              component={Notifikasi}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AkunSaya"
              component={AkunSaya}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Detail"
              component={Detail}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Detail2"
              component={Detail2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Keranjang"
              component={Keranjang}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Checkout"
              component={Checkout}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Checkout2"
              component={Checkout2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Chat"
              component={Chat}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PesananRiwayat"
              component={PesananRiwayat}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PesananDikirim"
              component={PesananDikirim}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <Splashscreen />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
