/* eslint-disable prettier/prettier */

import {Image, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Text} from 'react-native-paper';

interface Props {
  name: string;
}

export const Profile2 = ({name}: Props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 5,
        marginBottom: 10,
        paddingHorizontal: 20,
      }}>
      <View style={{flexDirection: 'row', marginTop: 10}}>
        <Image
          style={{height: 70, width: 70, right: 20, borderRadius: 50}}
          source={require('../../../assets/profile.png')}
        />
        <View>
          <Text style={{color: 'gray', fontSize: 20}}>Welcome</Text>
          <Text style={{fontSize: 20, color: 'black'}}>{name}</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          left: 10,
          marginVertical: 15,
        }}>
        <TouchableOpacity
          style={{marginHorizontal: 10}}
          onPress={() => console.log('Search')}>
          <Image
            style={{
              borderRadius: 50,
              borderWidth: 1,
              borderColor: '#C3D4FC',
              height: 40,
              width: 40,
            }}
            source={require('../../../assets/profile2/lupa.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => console.log('Bell')}>
          <Image
            style={{
              borderRadius: 50,
              borderWidth: 1,
              borderColor: '#C3D4FC',
              height: 40,
              width: 40,
            }}
            source={require('../../../assets/profile2/campana.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
