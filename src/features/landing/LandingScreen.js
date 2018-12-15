import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import TextButton from '../../components/TextButton';
import styles from '../../styles/landing-styles';

export default class LandingScreen extends React.Component {
  render() {
    return (
      <ImageBackground 
      style={styles.container} 
      source={require('../../assets/img/landing_background.jpeg')}
      >
        <TextButton
          onPress={() => this.props.navigation.navigate('Login')}
          title="Get Started"
          buttonStyle={styles.button}
          titleStyle={styles.title}
        />
      </ImageBackground>
    );
  }
}

