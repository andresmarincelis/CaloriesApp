/* eslint-disable prettier/prettier */

import {ScrollView, View} from 'react-native';
import {Palta} from '../../components/common/Palta';
import {GraphChar} from '../../components/graph/GraphChar';
import {Profile2} from '../../components/profile2/Profile2';
import {Header} from '../../components/common/Header';
import {SemiCircleProgressBar} from '../../components/semicircle/SemiCircleProgressBar';
import {SmallProgresiveBar} from '../../components/smallProgresiveBar/SmallProgresiveBar';
import {ProgresiveMiniBarOptions} from '../../../assets/options/ProgresiveMiniBarOptions';

export const ProgressScreen = () => {
  return (
    <ScrollView style={{flex: 1}}>
      <Palta style={{position: 'absolute', top: 80, left: 300}} />
      <Profile2 name="Andrés Marín" />
      <SemiCircleProgressBar consumedCal="1721 Kcal" totalCal="of 2213 Kcal" />
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#f4f1f0',
          top: -70,
          marginLeft: 10,
        }}>
        {ProgresiveMiniBarOptions.map((opt, index) => (
          <SmallProgresiveBar
            nameBar={opt.nameBar}
            grBar={opt.grBar}
            colorBar={opt.colorBar}
            progressBar={opt.progressBar}
            key={index}
          />
        ))}
      </View>
      <Header calories={1721} style={{top: -40}} />
      <GraphChar />
    </ScrollView>
  );
};
