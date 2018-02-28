import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import LoginPage from './components/loginPage/LoginPage';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <LoginPage/>
    );
  }
}
