import React from 'react';
import { createStackNavigator, 
  createAppContainer, 
  createBottomTabNavigator } from 'react-navigation';
import { Image } from 'react-native';

import LandingScreen from '../features/landing/LandingScreen';
import LoginScreen from '../features/login/LoginScreen';
import AddScreen from '../features/add-content/AddScreen';
import FeedScreen from '../features/feed/FeedScreen';
import Profile from '../features/profile/ProfileScreen';


const Router = createStackNavigator(
  {
    Landing: {
      screen: LandingScreen
    },
    Login: {
      screen: LoginScreen
    },
    Home: {
      screen: createBottomTabNavigator(
        {
          Add: {
            screen: AddScreen
          },

          Feed: {
            screen: FeedScreen
          },

          Profile: {
            screen: Profile
          },
        },
        {
          navigationOptions: ({ navigation }) => ({
            tabBarIcon: () => {
              const { routeName } = navigation.state;
              let icon;
              switch (routeName) {
                case 'Add':
                  icon = require('../assets/img/navigation_add_icon.png');
                  return (
                    <Image source={icon} style={{ width: 40, height: 40 }} />
                  );
                  case 'Feed':
                  icon = require('../assets/img/navigation_home_icon.png');
                  return (
                    <Image source={icon} style={{ width: 40, height: 40 }} />
                  );
                case 'Profile':
                icon = require('../assets/img/navigation_profile_icon.png');
                return (
                    <Image source={icon} style={{ width: 40, height: 40 }} />
                  );
                default:
                  break;
              }
            }
          }),

          tabBarOptions: {
            showIcon: true,
            showLabel: false,
            style: {
              backgroundColor: 'white',
              shadowColor: 'gray',
            },
            iconStyle: {
              width: 47,
              height: 47
            }
          },
          tabBarPosition: 'bottom',
          swipeEnabled: false
        }
      )
    }
  },
  {
    navigationOptions: {
      gesturesEnabled: false,
    },
    initialRouteName: 'Home'
  }
);

export default createAppContainer(Router);

