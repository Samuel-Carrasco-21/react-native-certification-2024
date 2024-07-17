import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppNavigation from "./src/navigation/AppNavigation";
import AuthNavigation from "./src/navigation/AuthNavigation";

export default function App() {
  const [login, setLogin] = useState(false);
  return (
    <NavigationContainer>
      {
        login ? (
          <AppNavigation/>
        ) : (
          <AuthNavigation/>
        )
      }
    </NavigationContainer>
  );
}
