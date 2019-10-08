import React, { PureComponent } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { Text, Image } from "react-native-elements";
import HorarioItem from "../components/HorarioItem";
import HorarioHeader from "../components/HorarioHeader";
import axios from "axios";
import { connect } from 'react-redux';
import { setHorarios } from '../redux/info/actions'

class Info extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      horarios: []
    };
  }

  getHorarios = () => {
    const apiHorarios = "http://10.11.85.139:4000/api/horarios";
    axios
      .get(apiHorarios)
      .then(response => {
        const horarios = response.data.data;
        this.props.dispatch(setHorarios({ horarios }))

      })
      .catch(error => {

        console.log('erro', error.message);
      });
  };

  componentDidMount() {
    this.getHorarios();

  }
  render() {
    const { horarios } = this.props
    return (

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 5
        }}
      >
        <View style={{ flex: 3, width: "100%" }}>
          <Text style={{ textAlign: "center" }} h2>
            Horarios
          </Text>
          <FlatList

            data={horarios.horarios}
            renderItem={({ item }) => (
              <HorarioItem
                itinerario={item.itinerario}
                zootec={item.zootec}
                inicio={item.hora_inicio}
                fim={item.hora_fim}
                viagens={item.n_voltas}
              />
            )}
            keyExtractor={item => item.id.toString()}
            ListHeaderComponent={() => <HorarioHeader />}
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Image
            source={require("../img/logo2.jpeg")}
            style={{ width: 140, height: 100 }}
            resizeMode={"contain"}
            resizeMethod={"resize"}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  item: {
    alignItems: "center",
    backgroundColor: "#dcda48",
    flexGrow: 1,
    margin: 4,
    padding: 20
  },
  text: {
    color: "#333333"
  }
});
export const mapStateToProps = state => {
  const { horarios } = state.info

  return {
    horarios,
  }

}

export default connect(mapStateToProps)(Info);