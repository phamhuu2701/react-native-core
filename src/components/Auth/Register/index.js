import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, Button } from "react-native";
import { loginAction } from "./../../../store/actions/auth";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Styles } from "../../../static/Theme";

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

class Register extends Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
  }
  render() {
    return (
      <View style={[Styles.container, Styles.blockCenterItems]}>
        <View style={Styles.marginBottom}>
          <Text>Register</Text>
        </View>

        <TouchableOpacity
          style={Styles.buttonContainer}
          onPress={() => this.navigation.navigate("Login")}
        >
          <Text style={Styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(mapStateToProps, {
  loginAction,
})(Register);
