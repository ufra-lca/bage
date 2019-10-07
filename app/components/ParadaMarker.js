import React, { PureComponent } from 'react';
import { Marker } from "react-native-maps";
import { Icon } from 'react-native-elements';
export default class ParadaMarker extends PureComponent {


    render() {
        const { coordinate, title } = this.props;
        const { latitude, longitude } = coordinate;
        return (
            <Marker  //PORTÃO PRINCIPAL
                coordinate={{ latitude: latitude, longitude: longitude }}
                title={title}
            >
                <Icon name='map-marker' type='material-community' color='black' size={25} />
            </Marker>
        );
    }
}
