import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  headerContainer: {
    alignSelf: 'flex-start',
    paddingTop: 30,
    paddingLeft: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: '700',
  },
  questionContainer: {
    margin: 8,
    borderWidth: 2,
  },
  questionText: {
    backgroundColor: 'rgb(68, 199, 245)',
    margin: 8,
    borderWidth: 2,
    padding: 2,
  },
  answerButtons: {
    alignSelf: 'flex-start',
    flexDirection: 'column',
    minHeight: 50,
    padding: 5,
  },
  radioContainer: {
    height: 180,
  },
});
