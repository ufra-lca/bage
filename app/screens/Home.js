import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import MapView from 'react-native-maps'
import BageMarker from '../components/BageMarker';
import { connectSocket } from '../config/socket';

export default class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      bages: {},
      marginTop: 1,
      update: false
    };
  }

  updateBage = (bage) => {
    const bages = this.state.bages
    bages[bage.id] = bage
    this.setState({ bages, update: !this.state.update })
  }
  horarioBage = () => {
    Alert.alert('BAGÉ PASSA A HORA QUE QUER')
  }
  renderBages() {
    const markers = [];
    bages = Object.keys(this.state.bages)
    bages.forEach(element => {
      const bage = this.state.bages[element]
      const marker = (
        <BageMarker
          key={bage.id}
          id={bage.id}
          latitude={bage.latitude}
          longitude={bage.longitude}
        />
      );
      markers.push(marker);
    });
    return markers;
  }

  componentDidMount() {
    connectSocket((bage) => this.updateBage(bage))
    this.props.navigation.setParams({ horaBage: this.horarioBage });
  }
  render() {
    return (
      <View style={styles.container}>
        <MapView style={[styles.map, { marginTop: this.state.marginTop }]}
          region={{
            latitude: -1.4547919,
            longitude: -48.444788,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,

          }}
          onMapReady={() => this.setState({ marginTop: 0 })}>
          {this.renderBages()}
        </MapView>
      </View>
    );
  }
}
const styles = StyleSheet.create({

  container: {

    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',

  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }

});