import React from 'react';
import {View, ViewStyle} from 'react-native';

interface GapProps {
  height?: number;
  style?: ViewStyle;
  width?: number;
  flex?: number;
}

export default function Gap({height, width, flex, style}: GapProps) {
  return <View style={{width, height, flex, ...style}} />;
}
