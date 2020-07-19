import React, { Component } from "react";
import { Text, View } from "react-native";
import { coreScreens } from "../../../screens";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Styles } from "../../../static/Theme";

class RnCoreHome extends Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
  }

  render() {
    const screens = Object.entries(coreScreens);

    return (
      <ScrollView>
        <View style={Styles.containerPadding}>
          {screens.map(([name, component], index) => (
            <TouchableOpacity
              key={index}
              style={Styles.buttonContainer}
              onPress={() => this.navigation.navigate(name)}
            >
              <Text style={Styles.buttonText}>{name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    );
  }
}

export default RnCoreHome;
