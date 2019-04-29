import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.scss';

class Result extends Component {
  config = {
    navigationBarTitleText: '结果',
  }

  render () {
    return (
      <View className='page'>
        <View className='doc-body bg'>
          <View className='panel'>
            完成
          </View>
        </View>
      </View>
    )
  }
}

export default Result;
