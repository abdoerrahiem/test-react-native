import {TextStyle, ViewStyle} from 'react-native';

export interface ProductInterface {
  id: number;
  image: string;
  like: number;
}

export interface ButtonInterface {
  title: string;
  disabled?: boolean;
  onPress?: () => void;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
  type?: 'primary' | 'error' | 'default';
}

export interface CardInterface {
  item: ProductInterface;
}
