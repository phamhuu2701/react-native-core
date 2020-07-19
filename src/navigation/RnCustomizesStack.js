import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { customizesScreens } from "../screens";

const Stack = createStackNavigator();

class RnCustomizesStack extends Component {
  render() {
    const screens = Object.entries(customizesScreens);

    console.log("RnCustomizesStack this.props :>> ", this.props);

    return (
      <Stack.Navigator initialRouteName={screens[0][0]}>
        {screens.map(([name, component], index) => (
          <Stack.Screen key={index} name={name} component={component} />
        ))}
      </Stack.Navigator>
    );
  }
}

export default RnCustomizesStack;
