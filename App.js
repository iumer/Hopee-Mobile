import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import AppLoading from "expo-app-loading";

import * as Font from "expo-font";
import KameiCalculator from "./src/screens/KameiCalculator";
import Maininterrface from "./src/screens/Maininterrface";
import LoginWindow from "./src/screens/LoginWindow";
import SignUp from "./src/screens/SignUp";
import Untitled from "./src/screens/Untitled";
import LuckyDraw from "./src/screens/LuckyDraw";

const DrawerNavigation = createDrawerNavigator({
  KameiCalculator: KameiCalculator,
  Maininterrface: Maininterrface,
  LoginWindow: LoginWindow,
  SignUp: SignUp,
  Untitled: Untitled,
  LuckyDraw: LuckyDraw
});

const StackNavigation = createStackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    KameiCalculator: KameiCalculator,
    Maininterrface: Maininterrface,
    LoginWindow: LoginWindow,
    SignUp: SignUp,
    Untitled: Untitled,
    LuckyDraw: LuckyDraw
  },
  {
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(StackNavigation);

function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return isLoadingComplete ? <AppContainer /> : <AppLoading />;
  }
}
async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      "roboto-700": require("./src/assets/fonts/roboto-700.ttf"),
      "roboto-regular": require("./src/assets/fonts/roboto-regular.ttf")
    })
  ]);
}
function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;
