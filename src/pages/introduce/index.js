import React, { Component } from 'react';
import { connect } from 'react-redux';
import Taro, { getCurrentInstance } from '@tarojs/taro';
import { View, Image, Text } from '@tarojs/components';
import { AtButton } from 'taro-ui';
import './index.scss';

@connect(({ questionnaires }) => ({
  questionnaires: questionnaires.list,
}))
class Introduce extends Component {
  state = {
    questionnaireId: '',
  }

  componentDidMount() {
    const { router } = getCurrentInstance();
    const { questionnaireId } = router.params;
    this.setState({ questionnaireId: parseInt(questionnaireId) });
  }

  // auto invoke when share
  onShareAppMessage() {
    const { questionnaireId } = this.state;
    return {
      title: '问卷测评',
      path: `/pages/introduce/index?questionnaireId=${questionnaireId}`,
    }
  }

  handleAnswer = () => {
    const { questionnaireId } = this.state;
    Taro.navigateTo({ url: `/pages/questionnaire/index?questionnaireId=${questionnaireId}` });
  }

  render() {
    const { questionnaires } = this.props;
    const { questionnaireId } = this.state;
    console.log(questionnaireId);
    const questionnaire = questionnaires.find(item => item.id === questionnaireId) || {};
    const { title, imageUrl, duration, description } = questionnaire;
    const questionSize = (questionnaire.questions || []).length;
    return (
      <View className='page'>
        <View className='doc-body bg'>
          <View className='head'>
            <View className='image'>
              <Image src={imageUrl} />
              <Text>{title}</Text>
            </View>
            <View className='desc'>
              <Text>
                {questionSize} 道题
              </Text>
              <Text>
                {duration} 分钟
              </Text>
            </View>
            <View className='btns'>
              <AtButton circle type='secondary' openType='share'>分享好友</AtButton>
              <AtButton circle type='primary' onClick={this.handleAnswer}>开始答题</AtButton>
            </View>
          </View>
          <View className='panel desc'>
            <View className='panel__title title'>问卷简介</View>
            <View className='panel__content no-padding txt'>
              <Text>
                {description}
              </Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default Introduce
