/* eslint-disable prettier/prettier */

import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

interface Props {
  titleFood: string;
  grFood: string;
  kcalFood: string;
}

export const TitleSubtitule = ({titleFood, grFood, kcalFood}: Props) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={{fontWeight: 'bold'}} variant="headlineSmall">
          {titleFood}
        </Text>
        <Text style={{fontWeight: 'bold'}} variant="headlineSmall">
          {grFood}
        </Text>
      </View>
      <View style={styles.container}>
        <Text style={{color: 'gray'}} variant="bodyMedium">
          {'Nutrition Value'}
        </Text>
        <Text style={{color: 'gray'}} variant="bodySmall">
          {kcalFood}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginHorizontal: 20,
  },
  textTitle: {
    fontWeight: 'bold',
    color: 'black',
    marginTop: 20,
  },
});
