import React, { PureComponent } from "react";
import MapView from "react-native-maps";
import { Image } from "react-native-elements";
import { getBageZooMarker, getBageMarker } from "../config/bageIconRequires";
export default class BageMarker extends PureComponent {
  renderBageMarker() {
    const height = 40;
    const width = 28.8;
    const { zootec, index } = this.props;
    return zootec ? (
      <Image source={getBageZooMarker(index)} style={{ height, width }} />
    ) : (
      <Image source={getBageMarker(index)} style={{ height, width }} />
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
