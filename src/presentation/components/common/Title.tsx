/* eslint-disable prettier/prettier */
import {StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-paper';

interface Props {
  title: string;
  buttonTextLeft: string;
  buttonTextRight: string;

  onPress1: () => void;
  onPress2?: () => void;
}

export const Title = ({
  title,
  buttonTextLeft,
  buttonTextRight,
  onPress1,
  onPress2,
}: Props) => {
  return (
    <View style={styles.container}>
      <View>
        <Button style={styles.buttonContainer} onPress={onPress1}>
          {buttonTextLeft}
        </Button>
      </View>

      <Text variant="headlineLarge" style={styles.textTitle}>
        {title}
      </Text>

      <View>
        <Button style={styles.buttonContainer} onPress={onPress2}>
          {buttonTextRight}
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  buttonContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
    height: 60,
    width: 60,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'black',
  },
  textTitle: {
    fontWeight: 'bold',
    color: 'black',
    marginTop: 20,
  },
});
