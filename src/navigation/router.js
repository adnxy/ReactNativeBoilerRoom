import { createStackNavigator, createAppContainer } from "react-navigation";

import LandingScreen from '../features/landing/LandingScreen';
import LoginScreen from '../features/login/LoginScreen';

const Router = createStackNavigator({
    Login: LoginScreen,
    Landing: LandingScreen,
  },
  {
    initialRouteName: 'Landing',
  }
);

export default createAppContainer(Router);
