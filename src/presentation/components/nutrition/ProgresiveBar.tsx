/* eslint-disable prettier/prettier */

import {Image, ImageSourcePropType, StyleSheet, View} from 'react-native';
import {ProgressBar, Text} from 'react-native-paper';

interface Props {
  nameBar: string;
  grBar: string;
  colorBar: string;
  image: ImageSourcePropType;
  progressBar: number;
}

export const ProgresiveBar = ({
  nameBar,
  grBar,
  colorBar,
  image,
  progressBar,
}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.componentContainer}>
        <Image style={styles.imgContainer} source={image} />
        <View style={styles.textContainer}>
          <Text style={{fontWeight: 'bold'}} variant="headlineSmall">
            {nameBar}
          </Text>
          <Text style={{color: 'gray'}} variant="bodyLarge">
            {grBar}
          </Text>
        </View>
      </View>
      <View style={styles.progressContainer}>
        <ProgressBar
          style={styles.bar}
          progress={progressBar}
          color={colorBar}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: 10,
  },
  componentContainer: {
    marginHorizontal: 30,
  },
  progressContainer: {
    width: '75%',
    alignSelf: 'center',
  },
  bar: {
    marginHorizontal: 20,
    top: -20,
    left: 20,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 40,
    top: -25,
    left: 20,
  },
  imgContainer: {
    height: 50,
    width: 50,
    top: 20,
    right: 10,
  },
});
