import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {ButtonInterface} from '../../utils/interfaces';
import {styles} from './styles';

export default function Button({
  title,
  disabled,
  onPress,
  containerStyle,
  textStyle,
  type = 'default',
}: ButtonInterface) {
  const defaultStyles = {
    backgroundColor:
      type === 'error' ? 'red' : type === 'primary' ? 'blue' : 'white',
    borderWidth: 1,
    borderColor: type === 'default' ? '#cfcfcf' : 'transparent',
  };

  const defaultTextStyles = {
    color: type === 'default' ? 'grey' : 'white',
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={disabled}
      onPress={onPress}
      style={[styles.container, defaultStyles, containerStyle]}>
      <Text style={[defaultTextStyles, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}
