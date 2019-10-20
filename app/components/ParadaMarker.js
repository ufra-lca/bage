import React, { PureComponent } from 'react';
import { Marker } from "react-native-maps";
import { Icon } from 'react-native-elements';
export default class ParadaMarker extends PureComponent {


    render() {
        const { coordinate: { latitude, longitude }, title } = this.props;
        return (
            <Marker  //PORTÃO PRINCIPAL
                coordinate={{ latitude, longitude }}
                title={title}
            >
                <Icon name='map-marker' type='material-community' color='black' size={11} />
            </Marker>
        );
    }
}
