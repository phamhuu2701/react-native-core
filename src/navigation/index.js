import "react-native-gesture-handler";
import React, { Component } from "react";
import { connect } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./DrawerNavigator";
import TabNavigator from "./TabNavigator";
import StackNavigator from "./StackNavigator";

function mapStateToProps(state) {
  return {
    store: state,
    auth: state.auth,
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

class index extends Component {
  render() {
    const { store } = this.props;
    const { isLoggedIn } = this.props.auth;

    console.log("store :>> ", store);

    return (
      <NavigationContainer>
        {/* <StackNavigator /> */}
        {/* <DrawerNavigator /> */}
        {/* <TabNavigator /> */}
        {isLoggedIn ? <TabNavigator /> : <DrawerNavigator />}
      </NavigationContainer>
    );
  }
}

export default connect(mapStateToProps)(index);
