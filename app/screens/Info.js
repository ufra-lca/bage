import React, { PureComponent } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { Text, Image } from "react-native-elements";
import axios from 'axios'

export default class Info extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      horarios: {}

    }
  }

  getHorarios = () => {
    const apiHorarios = "http://10.11.85.139:4000/api/horarios"
    console.log("Api:", apiHorarios)
    axios.get(apiHorarios)
      .then(response => {
        const horarios = response.data.data
        horarios.map((horario) => { console.log(horario.hora_fim) })
        this.setState({ horarios })
      })
      .catch(error => {
        console.log(error.message)
      })
  }

  componentDidMount() {
    this.getHorarios();
  }
  render() {
    const { horarios } = this.state

    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={{ flex: 1 }}>
          <FlatList
            data={this.state.horarios}
            keyExtractor={item => item.id}
            renderItem={({ item }) => {
              return (
                <View style={styles.item}>
                  <Text style={styles.text}>{item.hora_fim}</Text>
                </View>
              );
            }}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Image
            source={require("../img/logo2.jpeg")}
            style={{ width: 360, height: 300 }}
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
