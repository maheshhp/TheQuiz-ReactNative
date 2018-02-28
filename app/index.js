import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LoginPage from './components/loginPage/LoginPage';
import QuizPage from './components/quizPage/QuizPage';

type Props = {};
export default class App extends Component<Props> {
  state = {
    screenId: 0,
    userName: '',
    questionBank: [],
    leaderBoard: [],
    userId: -1,
  }
  loginHandle = (userName) => {
    console.log(userName);
    this.setState({
      screenId: 0,
      userName: '',
      questionBank: [],
      leaderBoard: [],
      userId: -1,
    });
    fetch(`http://localhost:8090/questions/${userName}`)
      .then((response) => {
        if (!response.ok) {
          console.log('Network request failed');
        }
        return response;
      })
      .then(res => res.json())
      .then((jsonRes) => {
        this.setState({
          questionBank: [...jsonRes.data],
          userName: jsonRes.data[0].userName,
          userId: jsonRes.data[0].userId,
          screenId: 1,
        }, () => { console.log(this.state.questionBank, this.state.userName, jsonRes.data); });
      });
  }
  leaderBoardHandle = () => {
    fetch('/leaderBoard')
      .then((response) => {
        if (!response.ok) {
          console.log('Network request failed');
        }
        return response;
      })
      .then(res => res.json())
      .then((jsonRes) => {
        this.setState({
          leaderBoard: [...this.state.leaderBoard, ...jsonRes.data],
          screenId: 2,
        }, () => { console.log(this.state.leaderBoard, this.state.userName); });
      });
  }
  answerHandle = (questionId, newOption) => {
    fetch('/update', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        user_id: this.state.userId,
        question_id: questionId,
        option: newOption,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          console.log('Network request failed');
        }
        return response;
      })
      .then(res => res.json())
      .then((jsonRes) => {
        console.log(jsonRes);
        this.setState({
          leaderBoard: [...this.state.leaderBoard, ...jsonRes.data],
        }, () => {
          const tempState = this.state.questionBank;
          for (let i = 0; i < tempState.length; i += 1) {
            if (tempState[i].questionId.toString() === questionId) {
              tempState[i].userOption.option = newOption;
              break;
            }
          }
          this.setState({
            questionBank: tempState,
          });
        });
      });
  }
  playAgainHandle = () => {
    this.setState({
      screenId: 0,
      userName: '',
      questionBank: [],
      leaderBoard: [],
    });
  }
  render() {
    if (this.state.screenId === 0) {
      return (<LoginPage
        loginHandle={this.loginHandle}
      />);
    }
    return (
      <QuizPage
        answerHandle={this.answerHandle}
        leaderBoardHandle={this.leaderBoardHandle}
        userName={this.state.userName}
        questionBank={this.state.questionBank}
      />
    );
  }
}
