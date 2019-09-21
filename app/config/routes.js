import React from "react";

import {
  createAppContainer,
  createStackNavigator,
  createMaterialTopTabNavigator
} from "react-navigation";
import Home from "../screens/Home";
import { Icon } from "react-native-elements";
import { Color, TextStyle } from "../styles";
import { TouchableOpacity, Alert, View } from "react-native";
import Info from "../screens/Info";

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => {
        return {
          header: null
        };
      }
    }
  },
  {
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Color.primary
      },
      headerTitleStyle: {
        ...TextStyle.header,
        alignSelf: "center",
        textAlign: "center",
        justifyContent: "center",
        flex: 1,
        fontSize: 30
      },
      headerTintColor: Color.white
    }
  }
);
const InfoStack = createStackNavigator(
  {
    Info: {
      screen: Info,
      navigationOptions: ({ navigation }) => {
        return {
          header: null
        };
      }
    }
  },
  {
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Color.primary
      },
      headerTitleStyle: {
        ...TextStyle.header,
        alignSelf: "center",
        textAlign: "center",
        justifyContent: "center",
        flex: 1,
        fontSize: 30
      },
      headerTintColor: Color.white
    }
  }
);
const TabNavigator = createMaterialTopTabNavigator(
  {
    Bagé: HomeStack,
    Informações: InfoStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Bagé") {
          iconName = `bus`;
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
        }
        // You can return any component that you like here!
        return (
          <Icon
            name={iconName}
            size={25}
            color={tintColor}
            type={"material-community"}
          />
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: Color.white,
      inactiveTintColor: "gray",
      activeBackgroundColor: Color.primary,
      inactiveBackgroundColor: Color.primary,
      style: {
        backgroundColor: "green"
      },
      indicatorStyle: {
        backgroundColor: "white"
      },
      labelStyle: {
        color: "white"
      }
    }
  }
);

export default createAppContainer(TabNavigator);
