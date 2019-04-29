import {
  REQUEST_QUESTIONNAIRES,
  RECEIVE_QUESTIONNAIRES,
  ANSWER_QUESTION,
} from '../constants/actionType';

const INITIAL_STATE = {
  list: [],
  loading: false,
}

export default function questionnaires(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_QUESTIONNAIRES:
      return {
        ...state,
        loading: true,
      };
    case RECEIVE_QUESTIONNAIRES:
      return {
        list: action.payload,
        loading: false,
      };
    case ANSWER_QUESTION: {
      const { questionnaireId, questionId, selectedIds } = action.payload;
      return {
        ...state,
        list: state.list.map(questionnaire => {
          if (questionnaire.id === questionnaireId) {
            return {
              ...questionnaire,
              questions: questionnaire.questions.map(question => {
                if (question.id === questionId) {
                  return {
                    ...question,
                    selectedIds
                  };
                }
                return question;
              }),
            };
          }
          return questionnaire;
        }),
      };
    }
     default:
       return state;
  }
}
