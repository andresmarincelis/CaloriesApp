/* eslint-disable prettier/prettier */
import {Image, StyleSheet, View} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {Text} from 'react-native-paper';

interface Props {
  consumedCal: string;
  totalCal: string;
}

export const SemiCircleProgressBar = ({consumedCal, totalCal}: Props) => {
  return (
    <View style={styles.container}>
      <AnimatedCircularProgress
        size={240}
        width={10}
        fill={75} // Porcentaje
        tintColor="#F47551"
        backgroundColor="#F4D7CF"
        arcSweepAngle={180} // Semicírculo
        rotation={270} // Orientación del semicírculo
      />
      <Image
        style={styles.image}
        source={require('../../../assets/fire.png')}
      />
      <View style={styles.textContainer}>
        <Text variant="displaySmall">{consumedCal}</Text>
        <Text variant="bodyMedium" style={{opacity: 0.4}}>
          {totalCal}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    position: 'absolute',
    top: 20,
    height: 30,
    width: 30,
    borderRadius: 15,
  },
  textContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
});
