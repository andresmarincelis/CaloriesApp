/* eslint-disable prettier/prettier */

import {StyleSheet, View} from 'react-native';
import {ProgressBar, Text} from 'react-native-paper';

interface Props {
  nameBar: string;
  grBar: string;
  colorBar: string;
  progressBar: number;
}

export const SmallProgresiveBar = ({
  nameBar,
  grBar,
  colorBar,
  progressBar,
}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Text style={{fontWeight: 'bold'}} variant="titleLarge">
          {nameBar}
        </Text>
        <ProgressBar progress={progressBar} color={colorBar} />
        <Text style={{opacity: 0.4}} variant="bodyLarge">
          {grBar}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 310,
    height: 65,
    marginHorizontal: 10,
  },
  cardContainer: {
    width: 80,
  },
});
