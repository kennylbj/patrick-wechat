import Taro, { Component } from '@tarojs/taro';
import { connect } from '@tarojs/redux';
import { View } from '@tarojs/components';
import { AtList, AtListItem, AtActivityIndicator } from 'taro-ui'
import { fetchQuestionnaires } from '../../actions/questionnaires';
import './index.scss';

@connect(({ questionnaires }) => ({
  questionnaires: questionnaires.list,
  loading: questionnaires.loading,
}))
class Index extends Component {
  config = {
    navigationBarTitleText: '问卷宝典',
    enablePullDownRefresh: true,
  }

  // auto invoke when share
  onShareAppMessage() {
    return {
      title: '问卷宝典',
      path: '/pages/index/index',
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  onPullDownRefresh = () => {
    this.fetchData()
      .then(() => Taro.stopPullDownRefresh());
  }

  fetchData = () => {
    const { dispatch } = this.props;
    Taro.showNavigationBarLoading();
    return dispatch(fetchQuestionnaires())
      .then(() => Taro.hideNavigationBarLoading());
  }

  handleClick = item => {
    Taro.navigateTo({ url: `/pages/introduce/index?questionnaireId=${item.id}` });
  }

  render () {
    const { questionnaires, loading } = this.props;
    console.log('questionnaires', questionnaires, loading);
    const questionnaireList = questionnaires.map(item => (
      <AtListItem
        key={item.id}
        title={item.title}
        extraText={`${item.duration} 分钟`}
        arrow='right'
        onClick={this.handleClick.bind(this, item)}
      />
    ));
    return (
      <View className='page'>
        <View className='doc-body bg'>
          <View className='panel'>
            <View className='panel__title'>问卷列表</View>
              <View className='panel__content no-padding'>
                <View className='example-item list'>
                  {
                    loading ? (
                      <AtActivityIndicator mode='center'></AtActivityIndicator>
                    ) : (
                      <AtList>
                        {
                          questionnaireList
                        }
                      </AtList>
                    )
                  }
                </View>
              </View>
          </View>
        </View>
      </View>
    )
  }
}

export default Index
