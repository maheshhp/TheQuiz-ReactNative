import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import Button from 'react-native-button';

import styles from './loginPage.style';


class LoginPage extends Component {
  render() {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.loginHeader}>
          <Text style={styles.headerTextWelcome}>
            Welcome
          </Text>
          <Text style={styles.toTextWelcome}>
            to
          </Text>
          <Text style={styles.quizzyTextWelcome}>
            Quizzy!
          </Text>
        </View>
        <View style={styles.loginField}>
          <Text style={{
            fontSize: 24,
            fontWeight: '800',
            paddingLeft: 16,
            paddingTop: 16,
          }}
          >Login
          </Text>
          <View style={styles.userNameField}>
            <Text style={{
              fontSize: 16,
              fontWeight: '800',
              paddingTop: 30,
              paddingBottom: 10,
            }}
            >Username
            </Text>
            <TextInput
              style={{ height: 40, borderColor: 'black', borderWidth: 2 }}
            />
            <View
              style={{
                borderRadius: 10,
                borderWidth: 2,
                width: 180,
                alignSelf: 'center',
                marginTop: 50,
              }}
              onPress={() => {}}
            >
              <Text style={{
                fontSize: 18,
                fontWeight: '800',
                alignSelf: 'center',
                padding: 10,
              }}
              >Login
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}


LoginPage.propTypes = {
  headingText: PropTypes.string,
};

LoginPage.defaultProps = {
  headingText: 'Start taking notes',
};

export default LoginPage;
