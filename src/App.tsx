import './gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {PaperProvider} from 'react-native-paper';
import {StackNavigator} from './presentation/navigators/StackNavigator';

import {MD3LightTheme as DefaultTheme} from 'react-native-paper';

export const App = () => {
  return (
    <PaperProvider theme={DefaultTheme}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
};
