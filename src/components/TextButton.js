import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const TextButton = (props) => {
  return (
    <TouchableOpacity
      style={props.buttonStyle}
      onPress={props.onPress}
    >
      <Text style={props.titleStyle}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default TextButton;
