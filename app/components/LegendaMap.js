import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements'

export class LegendaMap extends PureComponent {

    render() {
        return (
            <View style={styles.container}>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                    <Icon
                        name='checkbox-blank-circle'
                        type='material-community'
                        color="blue"
                    />
                    <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'black' }}> Rota Prédio Central </Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                    <Icon
                        name='checkbox-blank-circle'
                        type='material-community'
                        color="red"
                    />
                    <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'black' }}> Rota Zootecnia </Text>
                </View>



            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 185,
        right: 0,
        bottom: 0,
        height: 65,
        width: 165,
        flex: 1,
        paddingHorizontal: 8,
        flexDirection: 'column',
        justifyContent: 'space-evenly',

        backgroundColor: 'transparent'


    }
})


