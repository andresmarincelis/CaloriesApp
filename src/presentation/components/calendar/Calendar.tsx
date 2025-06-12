/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';

// const datesWhitelist = [
//   moment(), // Hoy
//   {
//     start: moment().subtract(7, 'days'), // Rango de fechas
//     end: moment().add(7, 'days'),
//   },
// ];

export const Calendar = () => (
  <View>
    <CalendarStrip
      scrollable={true} // Habilita el desplazamiento
      startingDate={new Date()} // Fecha inicial
      onDateSelected={date => console.log(date)} // Maneja la selección de fecha
      //   datesWhitelist={datesWhitelist}
      //   minDate={moment().subtract(1, 'year')} //Fecha mínima
      //   maxDate={moment().add(1, 'year')} //Fecha máxima
      style={{
        marginTop: 10,
        height: 100,
        paddingTop: 20,
        paddingBottom: 10,
      }}
      calendarHeaderStyle={{color: 'black'}}
      dateNumberStyle={{color: 'black'}}
      dateNameStyle={{color: 'gray'}}
      //   numDaysInWeek={3}
    />
  </View>
);
