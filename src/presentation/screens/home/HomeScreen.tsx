/* eslint-disable prettier/prettier */

import {useNavigation} from '@react-navigation/native';
import {View, TouchableOpacity} from 'react-native'; //TouchableOpacity
import {Text} from 'react-native-paper';
import {Profile2} from '../../components/profile2/Profile2';
import {Palta} from '../../components/common/Palta';
import {Header} from '../../components/common/Header';
import {GraphChar} from '../../components/graph/GraphChar';
import {ScrollView} from 'react-native-gesture-handler';
import {Calendar} from '../../components/calendar/Calendar';
import {AddMeal} from '../../components/add/AddMeal';
import {HomeOptions} from '../../../assets/options/HomeOptions';

export const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={{flex: 1}}>
      <Palta style={{position: 'absolute', right: 1, top: 100}} />

      <Profile2 name="Andrés Marín" />
      <Header calories={1783} />

      <GraphChar style={{marginTop: 40}} />
      <Calendar />

      {HomeOptions.map((opt, index) => (
        <AddMeal
          addMeal={opt.addMeal}
          recommendedCal={opt.recommendedCal}
          image={opt.image}
          key={index}
          onPress={() => console.log('Added')}
        />
      ))}

      <View style={{flex: 1, justifyContent: 'flex-end', padding: 20}}>
        <TouchableOpacity
          style={{
            backgroundColor: 'green',
            padding: 15,
            borderRadius: 10,
            alignItems: 'center',
          }}
          onPress={() => navigation.navigate('GoalScreen' as never)}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>GoalScreen</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
