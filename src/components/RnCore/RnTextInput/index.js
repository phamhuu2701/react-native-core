import React, { useState } from "react";
import {
  View,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Text,
  TouchableWithoutFeedback,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Styles } from "../../../static/Theme";

function RnTextInput(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [description, setDescription] = useState("");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={Styles.container}
    >
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        style={Styles.container}
      >
        <View
          style={[Styles.containerPadding, { justifyContent: "space-around" }]}
        >
          <View style={Styles.inputGroup}>
            <TextInput
              autoFocus={true}
              placeholder="Username"
              placeholderTextColor="red"
              defaultValue=""
              value={username}
              onChangeText={setUsername}
              // autoCapitalize="words"
              // autoCompleteType="email"
              // clearTextOnFocus={true}
              // editable={true}
              // maxLength={100}
              style={[Styles.paddingSmall, Styles.blockBorderRadius]}
            />
          </View>
          <View style={Styles.inputGroup}>
            <TextInput
              placeholder="Password"
              placeholderTextColor="red"
              defaultValue=""
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
              style={[Styles.paddingSmall, Styles.blockBorderRadius]}
            />
          </View>
          <View style={Styles.inputGroup}>
            <TextInput
              placeholder="Description"
              defaultValue=""
              value={description}
              onChangeText={setDescription}
              multiline
              numberOfLines={5}
              style={[Styles.paddingSmall, Styles.blockBorderRadius]}
            />
          </View>
          <TouchableOpacity
            style={Styles.buttonContainer}
            onPress={() => console.log({ username, password, description })}
          >
            <Text style={Styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default RnTextInput;
