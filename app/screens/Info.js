import React, { PureComponent } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { Text, Image } from "react-native-elements";
import HorarioItem from "../components/HorarioItem";
import HorarioHeader from "../components/HorarioHeader";
import axios from "axios";

export default class Info extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      horarios: {}
    };
  }

  getHorarios = () => {
    const apiHorarios = "http://10.11.85.139:4000/api/horarios";
    console.log("Api:", apiHorarios);
    axios
      .get(apiHorarios)
      .then(response => {
        const horarios = response.data.data;
        horarios.map(horario => {
          console.log(horario.hora_fim);
        });
        this.setState({ horarios });
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  componentDidMount() {
    this.getHorarios();
  }
  render() {
    const { horarios } = this.state;

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
            data={[
              {
                inicio: "07:00",
                fim: "09:00",
                label: "Ida e volta ao portão principal(Centro Esportivo)",
                viagens: 8,
                id: 1
              },
              {
                inicio: "07:00",
                fim: "09:00",
                label:
                  "Ida e volta ao portão principal(Centro Esportivo) via Zootecnia",
                viagens: 8,
                id: 2
              },
              {
                inicio: "11:30",
                fim: "14:30",
                label:
                  "Ida e volta ao portão principal(Centro Esportivo) via Zootecnia",
                viagens: 8,
                id: 3
              },
              {
                inicio: "17:00",
                fim: "18:00",
                label:
                  "Ida e volta ao portão principal(Centro Esportivo) via Zootecnia",
                viagens: 8,
                id: 4
              },
              {
                inicio: "17:00",
                fim: "19:00",
                label: "Ida e volta ao portão principal(Centro Esportivo)",
                viagens: 8,
                id: 5
              }
            ]}
            renderItem={({ item }) => (
              <HorarioItem
                label={item.label}
                inicio={item.inicio}
                fim={item.fim}
                viagens={item.viagens}
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
