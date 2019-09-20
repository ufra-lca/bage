import React, { PureComponent } from 'react';
import MapView from 'react-native-maps'
import { Icon } from 'react-native-elements';
export default class BageMarker extends PureComponent {


    render() {
        return (
            <MapView.Marker
                id={this.props.id}
                coordinate={{
                    latitude: this.props.latitude,
                    longitude: this.props.longitude,
                }}
            >
                <Icon name={'bus'} type={'font-awesome'} color={'red'} size={18} />
            </MapView.Marker>
        );
    }
}