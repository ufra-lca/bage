import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";

export default class HorarioHeader extends PureComponent {
  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          paddingHorizontal: 5,
          borderWidth: StyleSheet.hairlineWidth
        }}
      >
        <Text
          style={{
            textAlignVertical: "center",
            textAlign: "center",
            paddingRight: 1,
            fontSize: 16,
            fontWeight: "bold",
            width: "35%"
          }}
        >
          Horarios
        </Text>
        <Text
          style={{
            flex: 1,
            borderLeftWidth: StyleSheet.hairlineWidth,
            borderRightWidth: StyleSheet.hairlineWidth,
            paddingHorizontal: 3,
            width: "50%",
            fontSize: 16,
            fontWeight: "bold",
            textAlignVertical: "center",
            textAlign: "center"
          }}
        >
          Itinerários
        </Text>
        <Text
          style={{
            textAlignVertical: "center",
            textAlign: "center",
            paddingLeft: 2,
            width: "15%",
            fontSize: 12,
            fontWeight: "bold"
          }}
        >
          Viagens
        </Text>
      </View>
    );
  }
}
