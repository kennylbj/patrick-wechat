import Taro from '@tarojs/taro'
// import { BASE_API_URL } from '../constants/common'

export default {
  fetchQuestionnaires: () => {
    const data = [
      {
        id: 1,
        title: 'questionnaire1',
        description: 'qst1 desc qst1 desc qst1 desc qst1 desc qst1 desc qst1 desc qst1 desc qst1 desc qst1 desc qst1 desc qst1 desc qst1 desc',
        duration: 5,
        imageUrl: 'http://img4.imgtn.bdimg.com/it/u=2953424517,2592424793&fm=26&gp=0.jpg',
        questions: [
          {
            id: 1,
            title: 'questionnaire1-question1?',
            single: true,
            options: [
              {
                id: 1,
                key: 'A',
                value: 'questionnaire1-question1-option1',
                score: 1,
              }, 
              {
                id: 2,
                key: 'B',
                value: 'questionnaire1-question1-option2',
                score: 3,
              },
              {
                id: 3,
                key: 'C',
                value: 'questionnaire1-question1-option3',
                score: 1,
              }
            ]
          },
          {
            id: 2,
            title: 'questionaire1-question2?',
            single: true,
            options: [
              {
                id: 1,
                key: 'A',
                value: 'questionnaire1-question2-option1',
                score: 1,
              },
              {
                id: 2,
                key: 'B',
                value: 'questionnaire1-question2-option1',
                score: 2,
              }
            ]
          },
          {
            id: 3,
            title: 'questionaire1-question3?',
            single: true,
            options: [
              {
                id: 1,
                key: 'A',
                value: 'questionnaire1-question3-option1',
                score: 1,
              },
              {
                id: 2,
                key: 'B',
                value: 'questionnaire1-question3-option1',
                score: 2,
              },
            ]
          }
        ]
      },
      {
        id: 2,
        title: 'questionnaire2',
        description: 'qst2 desc qst2 desc qst2 desc qst2 desc qst2 desc qst2 desc qst2 desc qst2 desc qst2 desc qst2 desc qst2 desc qst2 desc',
        duration: 10,
        imageUrl: 'http://img0.imgtn.bdimg.com/it/u=1389166643,3626319833&fm=26&gp=0.jpg',
        questions: [
          {
            id: 1,
            title: 'questionnaire2-question1?',
            single: true,
            options: [
              {
                id: 1,
                key: 'A',
                value: 'questionnaire2-question1-option1',
                score: 1,
              }, 
              {
                id: 2,
                key: 'B',
                value: 'questionnaire2-question1-option2',
                score: 3,
              }
            ]
          },
          {
            id: 2,
            title: 'questionaire2-question2?',
            single: true,
            options: [
              {
                id: 1,
                key: 'A',
                value: 'questionnaire2-question2-option1',
                score: 1,
              },
              {
                id: 2,
                key: 'B',
                value: 'questionnaire2-question2-option1',
                score: 2,
              }
            ]
          }
        ]
      }
    ];
    // mock delay 1000ms
    return new Promise(resolve => setTimeout(() => resolve(data), 1000));
  },
  completeQuestionnaire: questionnaireId => {
    console.log('complete', questionnaireId);
    const result = {
      title: 'ojbk',
      content: '666',
    };
    return new Promise(resolve => setTimeout(() => resolve(result), 1000));
  }
}
