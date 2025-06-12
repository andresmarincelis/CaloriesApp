/* eslint-disable prettier/prettier */

import {StyleProp, StyleSheet, TextStyle, View} from 'react-native';
import {Text} from 'react-native-paper';

interface Props {
  calories: number;
  style?: StyleProp<TextStyle>;
}

export const Header = ({calories, style}: Props) => {
  return (
    <View style={style}>
      <Text style={styles.title} variant="headlineLarge">
        Track your diet journey
      </Text>
      <Text style={styles.subtitle}>Today Calorie: {calories}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginRight: 100,
    marginLeft: 20,
    fontFamily: 'Kurale',
    color: 'black',
  },
  subtitle: {
    marginLeft: 20,
    marginTop: 10,
    color: '#F47551',
    fontFamily: 'Kurale',
    fontWeight: 'bold',
  },
});
