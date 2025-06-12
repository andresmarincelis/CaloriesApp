/* eslint-disable prettier/prettier */

import {Alert, View} from 'react-native';
import {Title} from '../../components/common/Title';
import {Question} from '../../components/intro/Question';
import {IntroOption} from '../../components/intro/IntroOptions';
import {useState} from 'react';
import {ContinueButton} from '../../components/intro/ContinueButton';
import {SkipButton} from '../../components/intro/SkipButton';
import {useNavigation} from '@react-navigation/native';

export const GoalScreen = () => {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleContinuePress = () => {
    if (!selectedOption) {
      Alert.alert('Error', 'Debes elegir una opción para continuar');
      return;
    }
    navigation.navigate('GenderScreen' as never);
  };

  return (
    <View style={{flex: 1}}>
      <Title
        title="Logo"
        buttonTextLeft="Back"
        buttonTextRight="3 of 4"
        onPress1={() => navigation.goBack()}
      />
      <Question question="What goal do you have in mind?" />

      <IntroOption
        value="Lose Weight"
        icon={require('../../../assets/introOptions/loseweight.png')}
        selected={selectedOption === 'lose'}
        onPress={() => setSelectedOption('lose')}
      />
      <IntroOption
        value="Maintain Weight"
        icon={require('../../../assets/introOptions/maintainweight.png')}
        selected={selectedOption === 'maintain'}
        onPress={() => setSelectedOption('maintain')}
      />
      <IntroOption
        value="Gain Weight"
        icon={require('../../../assets/introOptions/gainweight.png')}
        selected={selectedOption === 'gain'}
        onPress={() => setSelectedOption('gain')}
      />
      <ContinueButton onPress={handleContinuePress} />
      <SkipButton />
    </View>
  );
};
