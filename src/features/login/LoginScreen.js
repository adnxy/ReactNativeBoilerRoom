import React from 'react';
import { StyleSheet, View } from 'react-native';
import TextButton from '../../components/TextButton';
import { FONT_AVENIR_BOOK } from '../../assets/fonts/fonts';
import { COLOR_NAVIGATION_BLUE } from '../../assets/colors/colors';

export default class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextButton
          onPress={() => this.props.navigation.navigate('Login')}
          title="Registration"
          buttonStyle={styles.registrationButton}
          titleStyle={styles.buttonTitle}
        />
          <TextButton
          onPress={() => this.props.navigation.navigate('Home')}
          title="Login"
          buttonStyle={styles.loginButton}
          titleStyle={styles.buttonTitle}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: '10%'
  },

  registrationButton: {
    backgroundColor: COLOR_NAVIGATION_BLUE,
    width: 320,
    height: 47,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },

  loginButton: {
    backgroundColor: COLOR_NAVIGATION_BLUE,
    width: 320,
    height: 47,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: '5%',
  },

  buttonTitle: {
    fontFamily: FONT_AVENIR_BOOK,
    fontSize: 18,
    color: 'white',
  },

});
