/* eslint-disable prettier/prettier */

import {Alert, View} from 'react-native';
import {Title} from '../../components/common/Title';
import {Question} from '../../components/intro/Question';
import {IntroOption} from '../../components/intro/IntroOptions';
import {useState} from 'react';
import {ContinueButton} from '../../components/intro/ContinueButton';
import {SkipButton} from '../../components/intro/SkipButton';
import {useNavigation} from '@react-navigation/native';

export const GenderScreen = () => {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleContinuePress = () => {
    if (!selectedOption) {
      Alert.alert('Error', 'Debes elegir una opción para continuar');
      return;
    }
    navigation.navigate('MainTabs' as never);
  };

  return (
    <View style={{flex: 1}}>
      <Title
        title="Logo"
        buttonTextLeft="Back"
        buttonTextRight="4 of 4"
        onPress1={() => navigation.goBack()}
      />
      <Question question="What's your gender?" />

      <IntroOption
        value="Male"
        icon={require('../../../assets/introOptions/male.png')}
        selected={selectedOption === 'male'}
        onPress={() => setSelectedOption('male')}
      />
      <IntroOption
        value="Female"
        icon={require('../../../assets/introOptions/female.png')}
        selected={selectedOption === 'female'}
        onPress={() => setSelectedOption('female')}
      />
      <IntroOption
        value="Other"
        icon={require('../../../assets/introOptions/other.png')}
        selected={selectedOption === 'other'}
        onPress={() => setSelectedOption('other')}
      />
      <ContinueButton onPress={handleContinuePress} />
      <SkipButton />
    </View>
  );
};
