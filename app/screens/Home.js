import React, { PureComponent } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import MapView, { Polyline, Marker } from 'react-native-maps'
import BageMarker from '../components/BageMarker';
import { connectSocket } from '../config/socket';
import { Icon } from 'react-native-elements'


export default class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      bages: {},
      marginTop: 1,
      update: false,
      lat_bage: -1.454202,
      long_bage: -48.438036
    };
  }

  updateBage = (bage) => {
    const bages = this.state.bages
    bages[bage.id] = bage
    this.setState({ bages, update: !this.state.update, lat_bage: bage.latitude, long_bage: bage.longitude })
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
            latitude: this.state.lat_bage,
            longitude: this.state.long_bage,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,

          }}
          onMapReady={() => this.setState({ marginTop: 0 })}>
          {this.renderBages()}

          <Marker  //PORTÃO PRINCIPAL
            coordinate={{ latitude: -1.454802, longitude: -48.445650 }}
            title='Terminal (Portão Principal) - Bagé'
          >
            <Icon name='map-marker' type='material-community' color='black' size={25} />
          </Marker>

          <Marker  //SOLOS
            coordinate={{ latitude: -1.453257, longitude: -48.443592 }}
            title='Ponto de Solos - Bagé'
          >
            <Icon name='map-marker' type='material-community' color='black' size={25} />
          </Marker>

          <Marker  //CARROCEIRO
            coordinate={{ latitude: -1.452433, longitude: -48.440714 }}
            title='Projeto carroceiro - Bagé'
          >
            <Icon name='map-marker' type='material-community' color='black' size={25} />
          </Marker>

          <Marker  //ICA
            coordinate={{ latitude: -1.454012, longitude: -48.438320 }}
            title='Parada ICA - Bagé'
          >
            <Icon name='map-marker' type='material-community' color='black' size={25} />
          </Marker>

          <Polyline
            coordinates={[ //ZOOTECNIA
              { latitude: -1.454132, longitude: -48.438176 },
              { latitude: -1.452819, longitude: -48.437297 },
              { latitude: -1.452994, longitude: -48.434315 },
              { latitude: -1.453305, longitude: -48.433891 },
              { latitude: -1.453340, longitude: -48.433768 },
              { latitude: -1.453264, longitude: -48.433652 },
              { latitude: -1.453157, longitude: -48.433617 },
              { latitude: -1.453104, longitude: -48.433593 },
              { latitude: -1.452983, longitude: -48.433690 },
              { latitude: -1.452940, longitude: -48.433768 },
              { latitude: -1.452994, longitude: -48.434315 },
              { latitude: -1.452819, longitude: -48.437297 },
              { latitude: -1.454132, longitude: -48.438176 },
            ]}
            strokeColor="red"
            strokeWidth={3}
          />

          <Polyline
            coordinates={[ //Primeira Curva
              { latitude: -1.454758, longitude: -48.445635 }, // Terminal Bagé
              { latitude: -1.454685, longitude: -48.445486 }, // Cruzamento terminal
              { latitude: -1.454321, longitude: -48.444793 }, // Pavilhão
              { latitude: -1.454514, longitude: -48.444439 }, //Primeira Curva pavilhão
              { latitude: -1.453675, longitude: -48.443873 }, // Segunda Curva pavilhão
              { latitude: -1.453678, longitude: -48.443872 }, //Cruzamento Antes de Solos 
              { latitude: -1.451811, longitude: -48.442631 }, //Primeira curva Embrapa
              { latitude: -1.451754, longitude: -48.442361 }, // Curva Embrapa_1
              { latitude: -1.451752, longitude: -48.441901 }, // Curva Embrapa_2
              { latitude: -1.451850, longitude: -48.441605 }, // Finalização da curva Emprapa

              { latitude: -1.452445, longitude: -48.440725 }, // carroceiro
              { latitude: -1.453081, longitude: -48.439788 }, // Intermedio entre Carroceiro e ICA
              { latitude: -1.453862, longitude: -48.438562 }, // 1 parada antes do ICA
              { latitude: -1.454022, longitude: -48.438336 }, // Parada do ICA
              { latitude: -1.454132, longitude: -48.438176 }, //Cruzamento Zootecnia 
              { latitude: -1.454193, longitude: -48.438035 }, //Cruzamento pós Zootecnia
              { latitude: -1.454663, longitude: -48.437344 }, // Reitoria/STIC
              { latitude: -1.455399, longitude: -48.436274 }, // Ponte Entre STIC/RU
              { latitude: -1.456396, longitude: -48.434791 }, // Biblioteca
              { latitude: -1.456754, longitude: -48.434202 }, //Cruzamento Garagem/RU
              { latitude: -1.456894, longitude: -48.434221 }, //Curva Garagem/Ru
              { latitude: -1.456918, longitude: -48.434239 }, //Curva Garagem/RU

              //Trajeto ao redor do Predio Central
              { latitude: -1.458117, longitude: -48.435835 },
              { latitude: -1.459051, longitude: -48.437091 },
              { latitude: -1.459118, longitude: -48.437135 },
              { latitude: -1.459201, longitude: -48.437166 },
              { latitude: -1.459338, longitude: -48.437168 },
              { latitude: -1.459493, longitude: -48.437105 },
              { latitude: -1.460182, longitude: -48.436703 },
              { latitude: -1.459961, longitude: -48.436358 },
              { latitude: -1.459872, longitude: -48.436136 },
              { latitude: -1.459612, longitude: -48.435309 },
              { latitude: -1.459504, longitude: -48.435061 },
              { latitude: -1.459434, longitude: -48.434982 },
              { latitude: -1.458565, longitude: -48.433750 },
              { latitude: -1.457820, longitude: -48.432648 },

              //Trajeto de Volta ao Terminal
              { latitude: -1.456754, longitude: -48.434202 }, //Cruzamento Garagem/RU - Volta
              { latitude: -1.456396, longitude: -48.434791 }, // Biblioteca - Volta
              { latitude: -1.455399, longitude: -48.436274 }, // Ponte Entre STIC/RU - Volta
              { latitude: -1.454663, longitude: -48.437344 }, // Reitoria/STIC - Volta
              { latitude: -1.454193, longitude: -48.438035 }, //Cruzamento pós Zootecnia - Volta
              { latitude: -1.454132, longitude: -48.438176 }, //Cruzamento Zootecnia  - Volta
              { latitude: -1.454022, longitude: -48.438336 }, // Parada do ICA - Volta
              { latitude: -1.453862, longitude: -48.438562 }, // 1 parada antes do ICA - Volta
              { latitude: -1.453081, longitude: -48.439788 }, // Intermedio entre Carroceiro e ICA - Volta
              { latitude: -1.452445, longitude: -48.440725 }, // carroceiro - Volta
              { latitude: -1.451850, longitude: -48.441605 }, // Finalização da curva Emprapa - Volta
              { latitude: -1.451348, longitude: -48.442324 }, // Volta Curva Emprapa
              { latitude: -1.451811, longitude: -48.442631 }, //Primeira curva Embrapa - Volta
              { latitude: -1.453678, longitude: -48.443872 }, //Cruzamento Antes de Solos - Volta
              { latitude: -1.453685, longitude: -48.443974 }, // Curva Pavilhão  - Volta
              { latitude: -1.454321, longitude: -48.444793 }, // Pavilhão - Volta
              { latitude: -1.454685, longitude: -48.445486 }, // Cruzamento terminal - Volta
              { latitude: -1.454579, longitude: -48.445695 }, // Rotatória Terminal







            ]}
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