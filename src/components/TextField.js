import React from 'react';
import { TextInput, Text, View } from 'react-native';

//Bellow is TextInput components used for login/registration forms
const TextField = (props) => {
  return (
    <View style={props.containerInputStyle}>
    <Text style={props.titleInputStyle}>{props.text}</Text>
    <TextInput 
      style={props.textInputStyle}
      value={props.value}
      onChangeText={props.onChangeText}
      autoFocus={props.autoFocus}
      autoCapitalize={props.autoCapitalize}
      secureTextEntry={props.secureTextEntry}
      onSubmitEditing={props.onSubmitEditing}
      placeholder={props.placeholder}
      returnKeyType={props.returnKeyType}
    />
    </View>
  );
};

export default TextField;
