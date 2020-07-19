import React, { useState } from "react";
import { View, Switch } from "react-native";
import { Colors } from "../../../static/Theme";

function RnSwitch(props) {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <View>
      <Switch
        trackColor={{ false: Colors.note, true: Colors.border }}
        thumbColor={isEnabled ? Colors.success : Colors.border}
        ios_backgroundColor={Colors.note}
        onValueChange={setIsEnabled}
        value={isEnabled}
      />
    </View>
  );
}

export default RnSwitch;
