import React, { Component } from 'react';
import { connect } from 'react-redux';
import Taro, { getCurrentInstance } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtProgress, AtButton } from 'taro-ui';
import PRadio from '../../components/radio';
import { answer, complete } from '../../actions/questionnaires';
import './index.scss';

@connect(({ questionnaires }) => ({
  questionnaires: questionnaires.list,
}))
class Questionnaire extends Component {
  state = {
    questionnaireId: '',
    currentIndex: 0,
  }

  componentDidMount() {
    const { router } = getCurrentInstance();
    const { questionnaireId } = router.params;
    this.setState({ questionnaireId: parseInt(questionnaireId) });
  }

  getQuestions = () => {
    const { questionnaires } = this.props;
    const { questionnaireId } = this.state;
    const questionnaire = questionnaires.find(item => item.id === questionnaireId) || {};
    return questionnaire.questions || [];
  }

  handleRadioSelect = selectedKey => {
    const { currentIndex, questionnaireId } = this.state;
    const questions = this.getQuestions();
    const question = questions[currentIndex] || {};
    if (question.single) {
      const { dispatch } = this.props;
      dispatch(answer(questionnaireId, question.id, [selectedKey]));
      if (currentIndex === questions.length - 1) {
        Taro.showLoading();
        dispatch(complete(questionnaireId))
          .then(() => Taro.hideLoading())
          .then(() => Taro.redirectTo({ url: '/pages/result/index' }));
      } else {
        setTimeout(() => this.setState({ currentIndex: currentIndex + 1 }), 200);
      }
    }
  }

  handlePrev = () => {
    const { currentIndex } = this.state;
    if (currentIndex === 0) {
      return;
    }
    this.setState({
      currentIndex: currentIndex - 1,
    });
  }

  handleNext = () => {
    const { currentIndex, questions } = this.state;
    if (currentIndex === questions.length - 1) {
      return;
    }
    this.setState({
      currentIndex: currentIndex + 1,
    });
  }

  render() {
    const { currentIndex } = this.state;
    const questions = this.getQuestions();
    const question = questions[currentIndex] || {};
    const { title, options, single } = question;
    const selectedIds = question.selectedIds || [];
    const radioOptions = (options || []).map(item => ({
      ...item,
      key: item.id,
      index: item.key,
    }));
    const percent = Math.round(currentIndex / questions.length * 100);
    return (
      <View className='page'>
        <View className='doc-body bg'>
          <View className='panel'>
            <View className='panel__content'>
              <AtProgress percent={percent} status='progress' />
            </View>
          </View>
          <View className='panel'>
            <View className='panel__content'>
              <View className='card'>
                <View className='title'>
                  {title}
                </View>
                <View className='question'>
                  <PRadio options={radioOptions} selectedKey={selectedIds[0]} onSelect={this.handleRadioSelect} />
                </View>
              </View>
            </View>
          </View>
          <View className='panel'>
            <View className='panel__content button'>
              {
                currentIndex > 0 && (
                  <AtButton type='primary' onClick={this.handlePrev}>上一题</AtButton>
                )
              }
              {
                !single && (currentIndex < questions.length - 1) && (
                  <AtButton type='primary' onClick={this.handleNext}>下一题</AtButton>
                )
              }
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default Questionnaire
