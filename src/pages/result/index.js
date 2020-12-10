import React, { Component } from 'react';
import { View } from '@tarojs/components';
import './index.scss';

class Result extends Component {
  componentDidMount() {
    console.log('result mount');
  }

  onShareAppMessage() {
    return {
      title: '问卷宝典',
      path: '/pages/result/index',
    }
  }

  initChart = (canvas, width, height, F2) => {
    const data = [
      { name: '属性1', value: 6.5 },
      { name: '属性2', value: 9.5 },
      { name: '属性3', value: 9 },
      { name: '属性4', value: 6 },
      { name: '属性5', value: 6 },
      { name: '属性6', value: 8 }
    ];

    const chart = new F2.Chart({
      el: canvas,
      width,
      height
    });

    chart.source(data, {
      value: {
        min: 0,
        max: 10
      }
    });
    chart.coord('polar');
    chart.tooltip(false); // 关闭 tooltip
    chart.axis('value', {
      grid: {
        lineDash: null
      },
      label: null,
      line: null
    });
    chart.axis('name', {
      grid: {
        lineDash: null
      }
    });
    chart.area()
      .position('name*value')
      .style({
        fillOpacity: 0.2
      })
      .animate({
        appear: {
          animation: 'groupWaveIn'
        }
      });
    chart.line()
      .position('name*value')
      .size(1)
      .animate({
        appear: {
          animation: 'groupWaveIn'
        }
      });
    chart.point().position('name*value').animate({
      appear: {
        delay: 300
      }
    });

    chart.guide().text({
      position: ['50%', '50%'],
      content: '73',
      style: {
        fontSize: 32,
        fontWeight: 'bold',
      }
    });
    chart.render();
    return chart;
  }

  render() {
    const opts = {
      onInit: this.initChart
    }
    return (
      <View className='page'>
        <View className='doc-body bg'>
          <View className='panel'>
            待实现
            <chart-canvas opts={opts} />
          </View>
        </View>
      </View>
    )
  }
}

export default Result;
