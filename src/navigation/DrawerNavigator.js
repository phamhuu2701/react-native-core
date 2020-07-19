import React, { Component } from "react";
import { connect } from "react-redux";
import { getDrawerScreens } from "../screens";
import { createDrawerNavigator } from "@react-navigation/drawer";

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

const Drawer = createDrawerNavigator();

class DrawerNavigator extends Component {
  render() {
    const { isLoggedIn } = this.props.auth;

    const screens = getDrawerScreens(isLoggedIn);

    console.log("DrawerNavigator this.props :>> ", this.props);

    return (
      <Drawer.Navigator
        initialRouteName={screens[0][0]}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={Icons[route.name.toLowerCase()]}
              size={size}
              color={color}
            />
          ),
        })}
      >
        {screens.map(([name, component], index) => (
          <Drawer.Screen key={index} name={name} component={component} />
        ))}
      </Drawer.Navigator>
    );
  }
}

export default connect(mapStateToProps)(DrawerNavigator);
