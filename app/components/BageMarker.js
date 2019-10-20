import React, { PureComponent } from "react";
import MapView from "react-native-maps";
import { Icon, Image } from "react-native-elements";
export default class BageMarker extends PureComponent {
  renderBageMarker() {
    const height = 30;
    const width = 21.6;
    const { zootec } = this.props;
    return zootec ? (
      <Image
        source={require("../img/bage-zoo-big.png")}
        style={{ height, width }}
      />
    ) : (
      <Image
        source={require("../img/bage-princ-big.png")}
        style={{ height, width }}
      />
    );
  }

  render() {
    return (
      <MapView.Marker
        id={this.props.id}
        coordinate={{
          latitude: this.props.latitude,
          longitude: this.props.longitude
        }}
      >
        {this.renderBageMarker()}
      </MapView.Marker>
    );
  }
}
