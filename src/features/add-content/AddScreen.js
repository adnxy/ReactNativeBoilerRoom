//This screen is created for purpose of bottom navigation bar
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class AddScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Add Screen</Text>
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
