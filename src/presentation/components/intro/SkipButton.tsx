/* eslint-disable prettier/prettier */

import {useNavigation} from '@react-navigation/native';
import {View} from 'react-native';
import {Button} from 'react-native-paper';

export const SkipButton = () => {
  const navigation = useNavigation();

  return (
    <View style={{marginBottom: 15}}>
      <Button
        labelStyle={{color: 'black'}}
        onPress={() => navigation.navigate('MainTabs' as never)}>
        Skip
      </Button>
    </View>
  );
};
