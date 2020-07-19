// In App.js in a new project
import "react-native-gesture-handler";
import * as React from "react";
import { Provider } from "react-redux";
import AppNavigation from "./navigation";
import store from "./store";
import { SafeAreaView } from "react-native";

function Root() {
  console.disableYellowBox = true;
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <AppNavigation />
      </SafeAreaView>
    </Provider>
  );
}

export default Root;
