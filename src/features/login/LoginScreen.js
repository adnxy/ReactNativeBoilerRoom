import React from 'react';
import { KeyboardAvoidingView, View } from 'react-native';
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

  setErrorMessage = (errorMessage) => {
    this.setState({ errorMessage });
  }

  render() {
    return (
      <View>
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
         autoFocus
         secureTextEntry
         value={this.state.password}
         onChangeText={password => this.setState({ password })}
         containerInputStyle={styles.containerInputPassword}
         titleInputStyle={styles.titleInputStyle}
         textInputStyle={styles.textInputStyle}
         returnKeyType="done"        
         />
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
