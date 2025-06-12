/* eslint-disable prettier/prettier */

import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-paper';

interface ContinueButtonProps {
  onPress: () => void;
}

export const ContinueButton = ({onPress}: ContinueButtonProps) => {
  return (
    <View style={styles.container}>
      <Button
        mode="contained"
        style={styles.button}
        labelStyle={styles.buttonText}
        onPress={() => onPress()}>
        Continue ►
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    marginHorizontal: 90,
  },
  button: {
    backgroundColor: '#F47551',
    marginBottom: 20,
    height: 50,
    alignContent: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
  },
});
