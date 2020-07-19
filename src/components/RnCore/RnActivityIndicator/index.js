import React from "react";
import { View, ActivityIndicator } from "react-native";

function RnActivityIndicator(props) {
  return (
    <View>
      <ActivityIndicator />
      <ActivityIndicator size="small" />
      <ActivityIndicator size="large" />
      <ActivityIndicator size="small" color="#0000ff" />
      <ActivityIndicator size="large" color="#00ff00" />
    </View>
  );
}

export default RnActivityIndicator;
