import React, { PureComponent } from "react";
import MapView from "react-native-maps";
import { Image } from "react-native-elements";
import { getBageZooMarker, getBageMarker } from "../config/bageIconRequires";
export default class BageMarker extends PureComponent {
  renderBageMarker() {
    const height = 30;
    const width = 21.6;
    const { zootec } = this.props;
    return zootec ? (
      <Image source={getBageZooMarker(0)} style={{ height, width }} />
    ) : (
      <Image source={getBageMarker(0)} style={{ height, width }} />
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
