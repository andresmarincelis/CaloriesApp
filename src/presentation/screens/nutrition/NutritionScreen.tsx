/* eslint-disable prettier/prettier */

import {Image, View} from 'react-native';
import {Title} from '../../components/common/Title';
import {TitleSubtitule} from '../../components/nutrition/Title-Subtitle';
import {ProgresiveBar} from '../../components/nutrition/ProgresiveBar';
import {NutritionOptions} from '../../../assets/options/NutritionOptions';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

export const NutritionScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <Title
        title="Nutrition"
        buttonTextLeft="Back"
        buttonTextRight="• • •"
        onPress1={() => navigation.navigate('Home' as never)}
        onPress2={() => console.log('No se que hacer esto XD')}
      />

      <Image
        style={{borderRadius: 30, marginBottom: 20}}
        source={require('../../../assets/avocado.png')}
      />

      <TitleSubtitule
        titleFood="Ensalada de Palta"
        grFood="150g"
        kcalFood="300cal"
      />

      {NutritionOptions.map((opt, index) => (
        <ProgresiveBar
          nameBar={opt.nameBar}
          grBar={opt.grBar}
          colorBar={opt.colorBar}
          progressBar={opt.progressBar}
          image={opt.image}
          key={index}
        />
      ))}

      <View style={{height: 30}} />
    </ScrollView>
  );
};
