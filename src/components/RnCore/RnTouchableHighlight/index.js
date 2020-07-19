import React from "react";
import { View, Text } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { Styles, Colors } from "../../../static/Theme";

function RnTouchableHighlight(props) {
  return (
    <View style={[Styles.container, Styles.padding]}>
      <TouchableHighlight
        underlayColor={Colors.warning}
        onPress={() => console.log("Pressed!")}
        onHideUnderlay={() => console.log("onHideUnderlay")}
        style={Styles.buttonContainer}
      >
        <Text style={Styles.buttonText}>Press me!!</Text>
      </TouchableHighlight>
    </View>
  );
}

export default RnTouchableHighlight;
