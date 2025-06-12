/* eslint-disable prettier/prettier */

import {View} from 'react-native';
import {Title} from '../../components/common/Title';
import {AvatarProfile} from '../../components/profile/AvatarProfile';
import {OptionProfile} from '../../components/profile/OptionProfile';
import {ProfileOptions} from '../../../assets/options/ProfileOptions';
import {useNavigation} from '@react-navigation/native';

export const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Title
        title="My Profile"
        buttonTextLeft="Back"
        buttonTextRight="Edit"
        onPress1={() => navigation.navigate('Home' as never)}
      />

      <AvatarProfile nameUser="Andrés Marín" igUser="@andresmarinc14" />

      {ProfileOptions.map((opt, index) => (
        <OptionProfile
          buttonText={opt.buttonText}
          key={index}
          image={opt.image}
          onPress={() => console.log('Apretado')}
        />
      ))}
    </View>
  );
};
