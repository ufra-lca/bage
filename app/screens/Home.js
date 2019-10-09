import React, { PureComponent } from "react";
import { View, StyleSheet, Alert } from "react-native";
import MapView, { Polyline } from "react-native-maps";
import BageMarker from "../components/BageMarker";
import { connectSocket } from "../config/socket";
import { coordsRota, coordsZootec, paradasMark, mapaStyle } from '../config/geo'
import ParadaMarker from "../components/ParadaMarker";
import { LegendaMap } from '../components/LegendaMap'
export default class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      bages: {},
      marginTop: 0,
      update: false,

      latitude: -1.454202,
      longitude: -48.438036,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,

      paradasMark: paradasMark


    };
  }

  updateBage = bage => {
    const bages = this.state.bages;
    bages[bage.id] = bage;
    this.setState({
      bages,
      update: !this.state.update,
      lat_bage: bage.latitude,
      long_bage: bage.longitude
    });
  };

  renderBages() {
    const markers = [];
    bages = Object.keys(this.state.bages);
    bages.forEach(element => {
      const bage = this.state.bages[element];
      if (bage.rodando) {
        const marker = (
          <BageMarker
            key={bage.id}
            id={bage.id}
            latitude={bage.latitude}
            longitude={bage.longitude}
          />
        );
        markers.push(marker);
      }
    });
    return markers;
  }
  renderParadas() {
    return this.state.paradasMark.map((paradaMark) => this.renderParadaMark(paradaMark))
  }
  renderParadaMark(paradaMark) {
    const { coordinate, title } = paradaMark;
    return <ParadaMarker coordinate={coordinate} title={title} />
  }
  renderLegendaMaps = () => {
    return <LegendaMap />
  }

  componentDidMount() {
    connectSocket(bage => this.updateBage(bage));
  }

  render() {
    const { paradasMark } = this.state;
    return (
      <View style={styles.container}>
        <MapView
          rotateEnabled={false}
          showsUserLocation={true}
          showsMyLocationButton={true}
          customMapStyle={mapaStyle}
          style={[styles.map, { marginTop: this.state.marginTop }]}
          onMapReady={() => this.setState({ marginTop: 1 })}
          region={{
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: this.state.latitudeDelta,
            longitudeDelta: this.state.longitudeDelta

          }}

          onRegionChangeComplete={region => {
            const {
              latitude,
              longitude,
              longitudeDelta,
              latitudeDelta
            } = region;
            this.setState({

              latitude,
              longitude,
              longitudeDelta,
              latitudeDelta
            });
          }}
        >
          {this.renderBages()}
          {this.renderParadas()}


          <Polyline
            coordinates={coordsZootec}
            strokeColor="red"
            strokeWidth={3}
          />

          <Polyline
            coordinates={coordsRota}
            strokeColor="blue"
            strokeWidth={3}
          />

        </MapView>
        {this.renderLegendaMaps()}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  map: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});
