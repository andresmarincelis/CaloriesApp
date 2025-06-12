/* eslint-disable prettier/prettier */

import {Image, ImageStyle, StyleProp} from 'react-native';

interface Props {
  style?: StyleProp<ImageStyle>;
}

export const Palta = ({style}: Props) => {
  return <Image source={require('../../../assets/palta.png')} style={style} />;
};
