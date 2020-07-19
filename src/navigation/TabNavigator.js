import React, { Component } from "react";
import { connect } from "react-redux";
import { getTabScreens } from "../screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Colors, Icons } from "../static/Theme";
// import Ionicons from 'react-native-vector-icons/Ionicons';
import { Ionicons } from "@expo/vector-icons";

function mapStateToProps(state) {
  return {
    // auth: state.auth,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

const Tab = createBottomTabNavigator();

class TabNavigator extends Component {
  render() {
    // const { isLoggedIn } = this.props.auth;

    const screens = getTabScreens();

    console.log("TabNavigator this.props :>> ", this.props);

    return (
      <Tab.Navigator
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
        tabBarOptions={{
          activeTintColor: Colors.primary,
          inactiveTintColor: "grey",
        }}
      >
        {screens.map(([name, component], index) => (
          <Tab.Screen key={index} name={name} component={component} />
        ))}
      </Tab.Navigator>
    );
  }
}

export default connect(mapStateToProps)(TabNavigator);
