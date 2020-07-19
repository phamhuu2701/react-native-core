import React, { Component } from "react";
import { connect } from "react-redux";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { loginAction } from "./../../../store/actions/auth";
import { Styles } from "../../../static/Theme";

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

class Login extends Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
    this.state = {
      username: {
        value: "admin",
        erorrMessage: "",
      },
      password: {
        value: "admin",
        erorrMessage: "",
      },
    };
  }

  onSubmit() {
    let formValid = true;
    let data = {};

    //validate username
    const username = this.state.username.value;
    if (!username) {
      formValid = false;
      this.setState({
        username: { value: username, errorMessage: "Field is required" },
      });
    } else {
      data = { ...data, username };
    }
    //validate password
    const password = this.state.password.value;
    if (!password) {
      formValid = false;
      this.setState({
        password: { value: password, errorMessage: "Field is required" },
      });
    } else {
      data = { ...data, password };
    }

    if (formValid) {
      if (data.username === "admin" && data.password === "admin") {
        return this.props.loginAction(data);
      } else {
        return alert("Username or password incorrect. Retry");
      }
    } else {
      return alert("Form data invalid. Retry");
    }
  }

  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={Styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={Styles.containerPadding}>
            <View style={Styles.marginBottom}>
              <Text style={{ textAlign: "center" }}>Login</Text>
            </View>

            <View style={Styles.inputGroup}>
              <Text style={Styles.inputLabel}>Username</Text>
              <TextInput
                placeholder="Username"
                defaultValue="admin"
                value={this.state.username.value}
                onChangeText={(value) =>
                  this.setState({ username: { value, errorMessage: "" } })
                }
                autoFocus
                style={Styles.inputControl}
              />
              <Text style={Styles.inputError}>
                {this.state.username.errorMessage}
              </Text>
            </View>

            <View style={Styles.inputGroup}>
              <Text style={Styles.inputLabel}>Password</Text>
              <TextInput
                placeholder="Password"
                defaultValue="admin"
                value={this.state.password.value}
                onChangeText={(value) =>
                  this.setState({ password: { value, errorMessage: "" } })
                }
                secureTextEntry
                style={Styles.inputControl}
              />
              <Text style={Styles.inputError}>
                {this.state.password.errorMessage}
              </Text>
            </View>

            <TouchableOpacity
              style={Styles.buttonContainer}
              onPress={() => this.onSubmit()}
            >
              <Text style={Styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

export default connect(mapStateToProps, {
  loginAction,
})(Login);
