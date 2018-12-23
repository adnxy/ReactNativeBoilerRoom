import React from 'react';
import { View, Text } from 'react-native';
import TextButton from '../../components/TextButton';
import TextField from '../../components/TextField';
import styles from '../../styles/login-styles';

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorMessage: '',
    };
  }


  onPressLogin = () => {
    const { email, password } = this.state;
    if (email === '') {
       this.setErrorMessage('Please enter your email');
    } else if (password === '') {
      this.setErrorMessage('Please enter your password');
    } else if (password.length <= 5) {
      this.setErrorMessage('Please enter at least 5 characters');
    } else {
      this.props.navigation.navigate('Home');
    }
  }

  setErrorMessage = (errorMessage) => {
    this.setState({ errorMessage });
  }

  render() {
    const { errorMessage } = this.state;
    return (
      <View style={styles.container}>
        <TextField 
         text="email/username"
         placeholder="oliver@"
         autoCapitalize="words"
         autoFocus
         value={this.state.email}
         onChangeText={email => this.setState({ email })}
         containerInputStyle={styles.containerInputEmail}
         titleInputStyle={styles.titleInputStyle}
         textInputStyle={styles.textInputStyle}
         returnKeyType="next"
        />
         <TextField 
         text="password"
         placeholder="******"
         autoCapitalize="none"
         secureTextEntry
         value={this.state.password}
         onChangeText={password => this.setState({ password })}
         containerInputStyle={styles.containerInputPassword}
         titleInputStyle={styles.titleInputStyle}
         textInputStyle={styles.textInputStyle}
         returnKeyType="done"        
         />
         <Text style={styles.errorMessage}>{errorMessage}</Text>
        <TextButton
          onPress={() => this.props.navigation.navigate('Login')}
          title="Registration"
          buttonStyle={styles.registrationButton}
          titleStyle={styles.buttonTitle}
        />
          <TextButton
          onPress={() => this.onPressLogin()}
          title="Login"
          buttonStyle={styles.loginButton}
          titleStyle={styles.buttonTitle}
          />
          </View>
    );
  }
}
