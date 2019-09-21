import React, { PureComponent } from "react";
import { View } from "react-native";
import { Text, Image } from "react-native-elements";

export default class Info extends PureComponent {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={{ flex: 1 }}>
          <Text>Horarios</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Image
            source={require("../img/logo2.jpeg")}
            style={{ width: 360, height: 300 }}
            resizeMode={"contain"}
            resizeMethod={"resize"}
          />
        </View>
      </View>
    );
  }
}
