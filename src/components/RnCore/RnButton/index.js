import React from "react";
import { View, Button } from "react-native";
import { Colors } from "../../../static/Theme";

function RnButton(props) {
  return (
    <View>
      <Button
        onPress={() => console.log("onPressLearnMore")}
        title="Learn More"
        color={Colors.warning}
        accessibilityLabel="Learn more about this purple button"
      />
      <Button
        onPress={() => console.log("onPressLearnMore")}
        title="Learn More"
        color={Colors.warning}
        accessibilityLabel="Learn more about this purple button"
        disabled
      />
    </View>
  );
}

export default RnButton;
