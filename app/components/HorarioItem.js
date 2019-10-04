import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";

export default class HorarioItem extends PureComponent {
  render() {
    const { label, inicio, fim, viagens } = this.props;
    return (
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          paddingHorizontal: 5,
          borderTopWidth: 0,
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
          {inicio}h às {fim}h
        </Text>
        <Text
          style={{
            textAlign: "justify",
            flex: 1,
            borderLeftWidth: StyleSheet.hairlineWidth,
            borderRightWidth: StyleSheet.hairlineWidth,
            paddingHorizontal: 3,
            width: "50%"
          }}
        >
          {label}
        </Text>
        <Text
          style={{
            textAlignVertical: "center",
            textAlign: "center",
            paddingLeft: 2,
            width: "15%",
            fontSize: 16
          }}
        >
          {viagens}
        </Text>
      </View>
    );
  }
}
