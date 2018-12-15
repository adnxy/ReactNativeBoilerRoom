import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class LandingScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Landing Screen</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Login')}
          title="Navigate To Login"
          color="#841584"
        >Login</Button>
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
});
