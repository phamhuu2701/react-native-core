import React, { Component } from "react";
import { connect } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";
import { getScreens } from "../screens";

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

const Stack = createStackNavigator();

class StackNavigator extends Component {
  render() {
    const { isLoggedIn } = this.props.auth;

    const screens = getScreens(isLoggedIn);

    return (
      <Stack.Navigator initialRouteName={screens[0][0]}>
        {screens.map(([name, component], index) => (
          <Stack.Screen key={index} name={name} component={component} />
        ))}
      </Stack.Navigator>
    );
  }
}

export default connect(mapStateToProps)(StackNavigator);
