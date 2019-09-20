import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView from 'react-native-maps'

export default class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      marginTop: 1
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <MapView style={[styles.map, { marginTop: this.state.marginTop }]}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,

          }}
          onMapReady={() => this.setState({ marginTop: 0 })}>
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