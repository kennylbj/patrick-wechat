import React, { Component } from 'react';
import { View } from '@tarojs/components';
import isEqual from 'lodash/isEqual';
import RadioItem from './item';
import './index.scss';

class PRadio extends Component {
  state = {
    data: [],
  }

  componentWillReceiveProps(nextProps) {
    const options = this.props.options || [];
    const nextOptions = nextProps.options || [];
    if (!isEqual(options, nextOptions)) {
      this.setState({
        data: nextOptions.map(op => ({
          ...op,
          selected: false,
        }))
      });
    }
  }

  handleSelect = item => {
    const { data } = this.state;
    const newData = data.map(op => {
      if (op.key === item.key) {
        return {
          ...op,
          selected: true,
        }
      }
      return {
        ...op,
        selected: false,
      };
    });
    this.setState({ data: newData });

    // call parent click callback
    const { onSelect } = this.props;
    const selectedKey = newData.filter(op => op.selected).map(op => op.key)[0] || {};
    onSelect(selectedKey);
  }

  render() {
    const { data } = this.state;
    const { selectedKey } = this.props;
    const radioItems = data.map(item => (
      <RadioItem
        key={item.key}
        index={item.index}
        value={item.value}
        selected={selectedKey ? selectedKey === item.key : item.selected}
        onClick={this.handleSelect.bind(this, item)}
      />
    ));
    return (
      <View className='radio'>
        { radioItems}
      </View>
    )
  }
}

export default PRadio;
