import {
  REQUEST_QUESTIONNAIRES,
  RECEIVE_QUESTIONNAIRES,
  ANSWER_QUESTION,
  RECEIVE_QUESTIONNAIRE_RESULT,
} from '../constants/actionType';
import api from '../api/questionnaires';

// request questionnaires
const requestQuestionnaires = () => ({
  type: REQUEST_QUESTIONNAIRES,
});

const receiveQuestionnaires = data => ({
  type: RECEIVE_QUESTIONNAIRES,
  payload: data,
});

export const fetchQuestionnaires = () => async dispatch => {
  dispatch(requestQuestionnaires());
  const response = await api.fetchQuestionnaires();
  return dispatch(receiveQuestionnaires(response));
};

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
export const complete = questionnaireId => async dispatch => {
  const response = await api.completeQuestionnaire(questionnaireId)
  return dispatch(receiveQuestionnaireResult(response));
};
