/* eslint-disable prettier/prettier */

import {Image, ImageSourcePropType, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';

interface Props {
  addMeal: string;
  recommendedCal: string;
  image: ImageSourcePropType;

  onPress?: () => void;
}

export const AddMeal = ({addMeal, recommendedCal, image, onPress}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10,
        marginHorizontal: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#3F7E03',
        height: 70,
      }}>
      <View style={{flexDirection: 'row', marginTop: 10}}>
        <Image
          style={{
            height: 50,
            width: 50,
            borderRadius: 50,
            right: 10,
          }}
          source={image}
        />
        <View>
          <Text style={{fontWeight: 'bold', top: 5, color: 'black'}}>
            {addMeal}
          </Text>
          <Text style={{opacity: 0.4, top: 5, color: 'black'}}>
            {recommendedCal}
          </Text>
        </View>
      </View>
      <View>
        <Image
          style={{borderRadius: 50, marginTop: 15, height: 40, width: 40}}
          source={require('../../../assets/homeOptions/greenButton.png')}
        />
      </View>
    </TouchableOpacity>
  );
};
