/* eslint-disable prettier/prettier */

import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Text} from 'react-native-paper';

interface Props {
  buttonText: string;
  image: ImageSourcePropType;

  onPress: () => void;
}

export const OptionProfile = ({buttonText, image, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={image} />
      </View>
      <Text style={styles.buttonText}>{buttonText}</Text>
      <Text style={styles.buttonText}>►</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 5,
  },
  buttonText: {
    fontSize: 22,
    marginHorizontal: 20,
  },
  imageContainer: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  image: {
    width: 40,
    height: 40,
  },
});
