import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { userScreens } from "../screens";

const Stack = createStackNavigator();

class UserStack extends Component {
  render() {
    const screens = Object.entries(userScreens);

    console.log("UserStack this.props :>> ", this.props);

    return (
      <Stack.Navigator initialRouteName={screens[0][0]}>
        {screens.map(([name, component], index) => (
          <Stack.Screen key={index} name={name} component={component} />
        ))}
      </Stack.Navigator>
    );
  }
}

export default UserStack;
