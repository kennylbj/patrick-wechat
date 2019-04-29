import {
  REQUEST_QUESTIONNAIRES,
  RECEIVE_QUESTIONNAIRES,
  ANSWER_QUESTION,
  RECEIVE_QUESTIONNAIRE_RESULT,
} from '../constants/actionType'
import api from '../api/questionnaires'

// request questionnaires
const requestQuestionnaires = () => ({
  type: REQUEST_QUESTIONNAIRES,
});

const receiveQuestionnaires = data => ({
  type: RECEIVE_QUESTIONNAIRES,
  payload: data,
});

export const fetchQuestionnaires = () => dispatch => {
  dispatch(requestQuestionnaires());
  return api.fetchQuestionnaires().then(questionnaires => {
    return dispatch(receiveQuestionnaires(questionnaires));
  });
}

// answer one question
export const answer = (questionnaireId, questionId, selectedIds) => ({
  type: ANSWER_QUESTION,
  payload: {
    questionnaireId,
    questionId,
    selectedIds,
  },
});

const receiveQuestionnaireResult = data => ({
  type: RECEIVE_QUESTIONNAIRE_RESULT,
  payload: data,
});

// complete one questionnaire
export const complete = questionnaireId => dispatch => {
  return api.completeQuestionnaire(questionnaireId).then(result => {
    return dispatch(receiveQuestionnaireResult(result));
  });
}
