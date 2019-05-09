import React, {Component} from 'react';
import _ from 'lodash';
import Icon from '../Icon';

const SwitchState = (props) => {
  let selected = props.value !== props.defaultValue;
  let newValue = selected? props.defaultValue: props.nextState;
  return (
    <Icon icon={props.icon} active={selected}
          onClick={() => props.onChange(newValue)} />
  );
}

export default SwitchState;
