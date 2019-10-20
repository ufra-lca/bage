import React, { PureComponent } from "react";
import { View, Text } from "react-native";
import { Overlay, Image } from "react-native-elements";
import Api from "../config/api";
import { FlatList } from "react-native-gesture-handler";
import { keyExtractorByIndex } from "../config/utils";
import { getBageIcon, getBageZooIcon } from "../config/bageIconRequires";

export default class HorariosModal extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      horarios: [],
      horariosZoo: []
    };
  }
  getHorarios = () => {
    Api.get("/api/horarios").then(response => {
      const horarios = [];
      const horariosZoo = [];
      response.data.forEach(horario => {
        if (horario.zootec) {
          horariosZoo.push(horario);
        } else {
          horarios.push(horario);
        }
      });
      this.setState({ horarios, horariosZoo });
    });
  };
  componentDidMount() {
    this.getHorarios();
  }
  renderListHeader(zootec) {
    const icon = zootec ? getBageZooIcon(0) : getBageIcon(0);
    return (
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image source={icon} style={{ width: 68, height: 38 }} />
        <Text>Rota Principal</Text>
      </View>
    );
  }
  render() {
    const { horarios, horariosZoo } = this.state;
    const { visible, onBackdropPress } = this.props;
    return (
      <Overlay isVisible={visible} onBackdropPress={onBackdropPress}>
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
            <FlatList
              keyExtractor={keyExtractorByIndex}
              data={horarios}
              ListHeaderComponent={() => this.renderListHeader(false)}
              renderItem={({ item }) => (
                <Text style={{ marginLeft: 10 }}>
                  {item.hora_inicio}hrs às {item.hora_fim}hrs
                </Text>
              )}
            />
          </View>
          <View style={{ flex: 1 }}>
            <FlatList
              keyExtractor={keyExtractorByIndex}
              data={horariosZoo}
              ListHeaderComponent={() => this.renderListHeader(true)}
              renderItem={({ item }) => (
                <Text style={{ marginLeft: 10 }}>
                  {item.hora_inicio}hrs às {item.hora_fim}hrs
                </Text>
              )}
            />
          </View>
        </View>
      </Overlay>
    );
  }
}
