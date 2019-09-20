import React from 'react'

import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator
} from 'react-navigation'
import Home from '../screens/Home'
import { Icon } from 'react-native-elements'
import { Color, TextStyle } from '../styles'
import { TouchableOpacity, Alert, View } from 'react-native'

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: 'Onde Na UFRA',
          headerLeft: (
            <View />
          ),
          headerRight: (
            <TouchableOpacity
              onPress={navigation.getParam('horaBage')}
            >
              <Icon
                name={'information-outline'}
                size={25}
                color={'white'}
                type={'material-community'}
              />
            </TouchableOpacity>
          ),
        }
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
        alignSelf: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        flex: 1,
        fontSize: 30
      },
      headerTintColor: Color.white
    }
  }
)
const TabNavigator = createBottomTabNavigator(
  {
    Bagé: HomeStack,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state
        let iconName
        if (routeName === 'Bagé') {
          iconName = `bus`
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
        }
        // You can return any component that you like here!
        return (
          <Icon
            name={iconName}
            size={25}
            color={tintColor}
            type={'material-community'}
          />
        )
      }
    }),
    tabBarOptions: {
      activeTintColor: Color.white,
      inactiveTintColor: 'gray',
      activeBackgroundColor: Color.primary,
      inactiveBackgroundColor: Color.primary
    }
  }
)

export default createAppContainer(TabNavigator)