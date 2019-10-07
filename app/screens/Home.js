import React, { PureComponent } from "react";
import { View, StyleSheet, Alert } from "react-native";
import MapView, { Polyline } from "react-native-maps";
import BageMarker from "../components/BageMarker";
import { connectSocket } from "../config/socket";
import { coordsRota, coordsZootec, paradasMark, mapaStyle } from '../config/geo'
import ParadaMarker from '../components/ParadaMarker'
export default class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      bages: {},
      marginTop: 1,
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
  horarioBage = () => {
    Alert.alert("BAGÉ PASSA A HORA QUE QUER");
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

  componentDidMount() {
    connectSocket(bage => this.updateBage(bage));
    this.props.navigation.setParams({ horaBage: this.horarioBage });
  }
  render() {
    const { paradasMark } = this.state;
    return (
      <View style={styles.container}>
        <MapView
          customMapStyle={mapaStyle}
          style={[styles.map, { marginTop: this.state.marginTop }]}
          region={{
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121
          }}
          onRegionChangeComplete={region => {
            const {
              latitude,
              longitude,
              longitudeDelta,
              latitudeDelta
            } = region;
            console.log("Region é", region);
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
