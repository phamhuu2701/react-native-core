import React from "react";
import { View, ImageBackground } from "react-native";

const IMAGE_URL =
  "https://i.pinimg.com/originals/62/b3/18/62b31817860c290f30a7e1ef389e4fe1.jpg";

function RnImageBackground(props) {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={{ uri: IMAGE_URL }}
        style={{ flex: 1 }}
        // imageStyle={{resizeMode: "cover"}}
      ></ImageBackground>
    </View>
  );
}

export default RnImageBackground;
