import React, { PureComponent } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import MapView, { Polyline } from "react-native-maps";
import BageMarker from "../components/BageMarker";
import { connectSocket } from "../config/socket";
import {
  coordsRota,
  coordsZootec,
  paradasMark,
  mapaStyle
} from "../config/geo";
import ParadaMarker from "../components/ParadaMarker";
import { LegendaMap } from "../components/LegendaMap";
import BageLegendaItem from "../components/BageLegendaItem";
import { Text, Button } from "react-native-elements";
import { keyExtractorByIndex } from "../config/utils";
import HorariosModal from "./HorariosModal";
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

      paradasMark,
      horariosVisible: false
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
    let bageIndex = 0;
    let bageZooIndex = 0;
    bages = Object.keys(this.state.bages);
    bages.forEach(element => {
      const bage = this.state.bages[element];
      if (bage.rodando) {
        let index = bage.zootec ? bageZooIndex : bageIndex;
        const marker = (
          <BageMarker
            key={bage.id}
            id={bage.id}
            latitude={bage.latitude}
            longitude={bage.longitude}
            zootec={bage.zootec}
            index={index}
          />
        );
        if (bage.zootec) {
          bageZooIndex = bageZooIndex + 1;
        } else {
          bageIndex = bageIndex + 1;
        }
        markers.push(marker);
      }
    });
    return markers;
  }
  renderParadas() {
    return this.state.paradasMark.map(paradaMark =>
      this.renderParadaMark(paradaMark)
    );
  }
  renderParadaMark(paradaMark) {
    const { coordinate, title } = paradaMark;
    return <ParadaMarker coordinate={coordinate} title={title} />;
  }
  renderLegendaMaps = () => {
    return <LegendaMap />;
  };
  buildBageList = () => {
    const bages = [];
    bagesList = Object.keys(this.state.bages);
    bagesList.forEach(element => {
      const bage = this.state.bages[element];
      if (!bage.zootec) {
        if (bage.rodando) {
          bages.push(bage);
        }
      }
    });
    return bages;
  };
  buildBageZooList = () => {
    const bages = [];
    bagesList = Object.keys(this.state.bages);
    bagesList.forEach(element => {
      const bage = this.state.bages[element];
      if (bage.zootec) {
        if (bage.rodando) {
          bages.push(bage);
        }
      }
    });
    return bages;
  };
  renderBageLegends() {
    const bageList = this.buildBageList();
    const bageZooList = this.buildBageZooList();
    if (bageList.length === 0 && bageZooList.length === 0) {
      return (
        <Text h1 style={{ textAlign: "center" }}>
          Sem Bagés rodando no momento
        </Text>
      );
    }
    if (bageList.length !== 0 && bageZooList.length === 0) {
      return (
        <FlatList
          keyExtractor={keyExtractorByIndex}
          data={bageList}
          renderItem={({ item, index }) => (
            <BageLegendaItem
              sentido={item.sentido}
              zootec={item.zootec}
              index={index}
            />
          )}
        />
      );
    }
    if (bageList.length === 0 && bageZooList.length !== 0) {
      return (
        <FlatList
          keyExtractor={keyExtractorByIndex}
          data={bageZooList}
          renderItem={({ item, index }) => (
            <BageLegendaItem
              sentido={item.sentido}
              zootec={item.zootec}
              index={index}
            />
          )}
        />
      );
    }
    return (
      <View style={{ flex: 1, flexDirection: "row" }}>
        <FlatList
          keyExtractor={keyExtractorByIndex}
          data={bageList}
          renderItem={({ item, index }) => (
            <BageLegendaItem
              sentido={item.sentido}
              zootec={item.zootec}
              index={index}
            />
          )}
        />
        <FlatList
          keyExtractor={keyExtractorByIndex}
          data={bageZooList}
          renderItem={({ item, index }) => (
            <BageLegendaItem
              sentido={item.sentido}
              zootec={item.zootec}
              index={index}
            />
          )}
        />
      </View>
    );
  }
  componentDidMount() {
    connectSocket(bage => this.updateBage(bage));
  }

  render() {
    const { horariosVisible } = this.state;
    return (
      <View style={styles.container}>
        <Button
          title={"Horários"}
          raised
          containerStyle={{
            backgroundColor: "#1e90ff",
            marginVertical: 10,
            marginHorizontal: 50
          }}
          onPress={() => this.setState({ horariosVisible: true })}
        />
        <MapView
          rotateEnabled={false}
          showsUserLocation={true}
          showsMyLocationButton={true}
          customMapStyle={mapaStyle}
          style={[
            {
              marginTop: this.state.marginTop,
              width: "95%",
              height: "65%"
            }
          ]}
          onMapReady={() => this.setState({ marginTop: 0 })}
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
            strokeColor="#ff4757"
            strokeWidth={3}
          />

          <Polyline
            coordinates={coordsRota}
            strokeColor="#1e90ff"
            strokeWidth={3}
          />
        </MapView>
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 5
          }}
        >
          {this.renderBageLegends()}
        </View>
        <HorariosModal
          visible={horariosVisible}
          onBackdropPress={() => this.setState({ horariosVisible: false })}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  }
});
