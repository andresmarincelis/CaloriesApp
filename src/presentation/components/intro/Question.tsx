/* eslint-disable prettier/prettier */
import {View} from 'react-native';
import {Text} from 'react-native-paper';

interface Props {
  question: string;
}

export const Question = ({question}: Props) => {
  return (
    <View
      style={{
        marginTop: 10,
        marginHorizontal: 20,
        alignItems: 'center',
        marginBottom: 50,
      }}>
      <Text
        style={{fontWeight: '700', textAlign: 'center', color: 'black'}}
        variant="headlineLarge">
        {question}
      </Text>
    </View>
  );
};
