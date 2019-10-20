import React, { PureComponent } from "react";
import { View } from "react-native";
import { Image, Text } from "react-native-elements";

export default class BageLegendaItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderTextSentido() {
    const { sentido } = this.props;
    return sentido ? "Sentido Prédio Central" : "Sentido Portão";
  }
  renderTextRota() {
    const { zootec } = this.props;
    return zootec ? "Bagé(Rota Zootecnia)" : "Bagé(Rota Principal)";
  }
  renderBage() {
    const { zootec } = this.props;
    return zootec ? (
      <Image
        source={require("../img/icon-bage-zoo.png")}
        style={{ width: 54, height: 30 }}
      />
    ) : (
      <Image
        source={require("../img/icon-bage-princ.png")}
        style={{ width: 54, height: 30 }}
      />
    );
  }
  render() {
    return (
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text h4 style={{ textAlign: "center" }}>
          {this.renderTextSentido()}
        </Text>
        {this.renderBage()}
        <Text>{this.renderTextRota()}</Text>
      </View>
    );
  }
}
