import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Taro, { usePullDownRefresh, useShareAppMessage } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtList, AtListItem, AtActivityIndicator } from 'taro-ui';
import { fetchQuestionnaires } from '../../actions/questionnaires';
import './index.scss';

export default function Index() {
  const dispatch = useDispatch();
  const questionnaires = useSelector(state => state.questionnaires.list);
  const loading = useSelector(state => state.questionnaires.loading);

  const fetchData = async () => {
    Taro.showNavigationBarLoading();
    await dispatch(fetchQuestionnaires());
    Taro.hideNavigationBarLoading();
  };

  const fetchDataCallback = useCallback(fetchData, []);

  useEffect(() => {
    fetchDataCallback();
  }, [fetchDataCallback]);

  usePullDownRefresh(async () => {
    await fetchData();
    Taro.stopPullDownRefresh();
  });

  useShareAppMessage(() => ({
    title: '问卷宝典',
    path: '/pages/index/index',
  }));

  const handleClick = item => Taro.navigateTo({ url: `/pages/introduce/index?questionnaireId=${item.id}` });

  const questionnaireList = questionnaires.map(item => (
    <AtListItem
      key={item.id}
      title={item.title}
      extraText={`${item.duration} 分钟`}
      arrow='right'
      onClick={() => handleClick(item)}
    />
  ));

  return (
    <View className='page'>
      <View className='doc-body bg'>
        <View className='panel'>
          <View className='panel__title'>问卷列表</View>
          <View className='panel__content no-padding'>
            <View className='example-item list'>
              {loading ? (
                <AtActivityIndicator mode='center' />
              ) : (
                  <AtList>
                    {questionnaireList}
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
