import React, { Component } from 'react'
import { View, Image, Text } from '@tarojs/components'
import classNames from 'classnames'
import checkImg from '../../assets/images/check.png'
import './index.scss'

class RadioItem extends Component {
  render() {
    const { index, value, selected, onClick } = this.props;
    return (
      <View className='item' hoverClass='item-hover' hoverStayTime={100} onClick={onClick}>
        <View className='left'>
          <Text className='index'>
            {index}
          </Text>
          <Text className='title'>
            {value}
          </Text>
        </View>
        <View>
          <Image
            className={
              classNames({
                'check': true,
                'check-hidden': !selected,
              })
            }
            src={checkImg}
          />
        </View>
      </View>
    )
  }
}

export default RadioItem;
