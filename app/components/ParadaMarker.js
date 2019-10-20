import React, { PureComponent } from "react";
import { Marker } from "react-native-maps";
import { Icon, Image } from "react-native-elements";
export default class ParadaMarker extends PureComponent {
  render() {
    const {
      coordinate: { latitude, longitude },
      title
    } = this.props;
    return (
      <Marker //PORTÃO PRINCIPAL
        coordinate={{ latitude, longitude }}
        title={title}
      >
        <Image
          source={require("../img/parada-small.png")}
          style={{ height: 11, width: 7.92 }}
        />
      </Marker>
    );
  }
}
