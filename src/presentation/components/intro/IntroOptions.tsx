/* eslint-disable prettier/prettier */
import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet, Image} from 'react-native';

interface IntroOptionProps {
  value: string;
  icon: any;
  selected: boolean;
  onPress: () => void;
}

export const IntroOption = ({
  value,
  icon,
  selected,
  onPress,
}: IntroOptionProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.optionContainer,
        selected && styles.optionContainerSelected,
      ]}>
      <Image source={icon} style={styles.icon} />

      <Text style={styles.optionText}>{value}</Text>

      <View style={[styles.circle, selected && styles.circleSelected]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 20,
    padding: 15,
    marginVertical: 15,
    marginHorizontal: 30,
    backgroundColor: 'white',
  },
  optionContainerSelected: {
    borderColor: '#F47551',
  },
  optionText: {
    fontSize: 26,
    fontWeight: '500',
    color: '#333',
  },
  icon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#999',
  },
  circleSelected: {
    backgroundColor: '#F47551',
    borderColor: '#F47551',
  },
});
