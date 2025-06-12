/* eslint-disable prettier/prettier */
import {StyleProp, View, ViewStyle} from 'react-native';
import {LineChart} from 'react-native-gifted-charts';

interface Props {
  style?: StyleProp<ViewStyle>;
}

export const GraphChar = ({style}: Props) => {
  const lineData = [
    {value: 1000, label: 'L'},
    {value: 1100, label: 'M'},
    {value: 1200, label: 'Mi'},
    {value: 1500, label: 'J'},
    {value: 1400, label: 'V'},
    {value: 1700, label: 'S'},
    {value: 1000, label: 'D'},
  ];

  return (
    <View style={style}>
      <LineChart
        areaChart
        curved
        data={lineData}
        height={180}
        showVerticalLines
        spacing={50}
        initialSpacing={0}
        color1="#FC4C64"
        textColor1="#FC4C64"
        dataPointsColor1="#FC4C64"
        startFillColor1="#FC4C64"
        startOpacity={0.8}
        endOpacity={0.3}
        width={291}
        // xAxis={{
        //   labels: ['L', 'M', 'Mi', 'J', 'V', 'S', 'D'],
        // }}
        // yAxis={{
        //   min: 1000,
        //   max: 2500,
        //   step: 500,
        //   label: ['1000', '1500', '2000', '2500'], // Etiquetas del eje Y
        // }}
      />
    </View>
  );
};
