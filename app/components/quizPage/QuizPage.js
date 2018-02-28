import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableWithoutFeedback } from 'react-native';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import PropTypes from 'prop-types';
import styles from './quizPage.style';

class QuizPage extends Component {
    state = {
      numChecked: [],
    }
    componentDidMount() {
      const { questionBank } = this.props;
      const tempState = this.state.numChecked;
      for (let i = 0; i < questionBank.length; i += 1) {
        if (questionBank[i].userOption.option !== '') {
          tempState[questionBank[i].questionId.toString()] = 1;
        }
      }
      this.setState({
        numChecked: tempState,
      });
    }
    render() {
      const { questionBank } = this.props;
      const questionCards = [];
      for (let i = 0; i < questionBank.length; i += 1) {
        const options = [];
        let thisOption = -1;
        questionBank[i].questionOptions.forEach((option) => {
          if (questionBank[i].userOption.option === option.option) {
            thisOption = option.question_id;
          }
          options.push({
            label: option.option,
            value: option.question_id,
          });
        });
        questionCards.push(<View style={styles.questionContainer} key={i}>
          <Text style={{ paddingLeft: 6, paddingTop: 6, fontWeight: '700' }}>Question {i + 1}</Text>
          <View style={styles.questionText}>
            <Text>{questionBank[i].question}</Text>
          </View>
          <View style={styles.radioContainer}>
            <RadioForm
              style={styles.answerButtons}
              radio_props={options}
              buttonColor="#000000"
              initial={thisOption}
              onPress={(value, label) => { this.props.answerHandle(value, label); }}
            />
          </View>
        </View>);
      }
      return (
        <ScrollView>
          <View style={styles.headerContainer}>
            <Text style={styles.userName}>Hello World</Text>
          </View>
          {questionCards}
          <TouchableWithoutFeedback onPressIn={() => { }}>
            <View
              style={{
                borderRadius: 10,
                borderWidth: 2,
                width: 180,
                alignSelf: 'center',
                marginTop: 10,
                marginBottom: 10,
              }}
            >
              <Text style={{
                fontSize: 18,
                fontWeight: '800',
                alignSelf: 'center',
                padding: 10,
              }}
              >Calculate
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      );
    }
}


QuizPage.propTypes = {
  questionBank: PropTypes.array.isRequired,
  answerHandle: PropTypes.func.isRequired,
};

QuizPage.defaultProps = {
};

export default QuizPage;
