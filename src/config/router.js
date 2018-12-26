import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator, 
  createAppContainer, 
  createBottomTabNavigator } from 'react-navigation';

import LandingScreen from '../features/landing/LandingScreen';
import LoginScreen from '../features/login/LoginScreen';
import AddScreen from '../features/add-content/AddScreen';
import FeedScreen from '../features/feed/FeedScreen';
import Profile from '../features/profile/ProfileScreen';
import { COLOR_NAVIGATION_BLUE, COLOR_NAVIGATION_GRAY } from '../assets/colors/colors';
import { FONT_AVENIR_MEDIUM } from '../assets/fonts/fonts';

const Router = createStackNavigator(
   /* App screens */
  {
    Landing: {
      screen: LandingScreen
    },
    Login: {
      screen: LoginScreen
    },
    /* Components for bottom tab navigation bar */
    Home: {
      screen: createBottomTabNavigator(
        {
          Feed: {
            screen: FeedScreen
          },
          Add: {
            screen: AddScreen
          },
          Profile: {
            screen: Profile
          },
        },
        {
          /* Logic for switching between screens in bottom tab bar is bellow */
          navigationOptions: ({ navigation }) => ({
            tabBarIcon: () => {
              const { routeName } = navigation.state;
              let icon;
              switch (routeName) {
                case 'Feed':
                icon = require('../assets/img/navigation_home_icon.png');
                return (
                  <Image source={icon} style={{ width: 40, height: 40 }} />
                );
                case 'Add':
                  icon = require('../assets/img/navigation_add_icon.png');
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
       /* Bottom tab bar config is bellow */
          tabBarOptions: {
            showIcon: true,
            showLabel: true,
            style: {
              backgroundColor: COLOR_NAVIGATION_GRAY,
              fontFamily: FONT_AVENIR_MEDIUM,
              fontSize: 18,
            },
            iconStyle: {
              width: 47,
              height: 47
            }
          },
          tabBarPosition: 'bottom',
          swipeEnabled: true
        }
      )
    }
  },
  {
    initialRouteName: 'Landing',
       /* The header config for HomeScreen is bellow */
       defaultNavigationOptions: {
        title: 'LifeCoaches App',
        headerStyle: {
          backgroundColor: COLOR_NAVIGATION_BLUE,
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontFamily: FONT_AVENIR_MEDIUM,
          fontSize: 18,
        },
      },
    }
);

export default createAppContainer(Router);

