import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TextButton from '../../components/TextButton';
import { FONT_AVENIR_BOOK } from '../../assets/fonts/fonts';
import { COLOR_NAVIGATION_BLUE } from '../../assets/colors/colors';

export default class LandingScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Landing Screen</Text>
        <TextButton
          onPress={() => this.props.navigation.navigate('Login')}
          title="Get Started"
          buttonStyle={styles.button}
          titleStyle={styles.title}
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
    justifyContent: 'center',
  },

  button: {
    backgroundColor: COLOR_NAVIGATION_BLUE,
    marginTop: 380,
    width: 320,
    height: 47,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },

  title: {
    fontFamily: FONT_AVENIR_BOOK,
    fontSize: 18,
    color: 'white',
  }
});
