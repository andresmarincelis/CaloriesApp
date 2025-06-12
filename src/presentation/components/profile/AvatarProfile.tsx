/* eslint-disable prettier/prettier */

import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';

interface Props {
  nameUser: string;
  igUser: string;
}

export const AvatarProfile = ({nameUser, igUser}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image
          style={styles.imageContainer}
          source={require('../../../assets/profile.png')}
        />
        <TouchableOpacity
          style={styles.pencilContainer}
          onPress={() => console.log('Cambiando foto')}>
          <Image
            style={styles.pencil}
            source={require('../../../assets/pencil.png')}
          />
        </TouchableOpacity>
      </View>
      <Text variant="headlineMedium">{nameUser}</Text>
      <Text variant="labelMedium">{igUser}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  avatarContainer: {
    position: 'relative',
  },
  imageContainer: {
    marginVertical: 10,
    width: 120,
    height: 120,
    borderRadius: 60,
    borderColor: 'white',
    borderWidth: 1,
    overflow: 'hidden',
  },
  pencilContainer: {
    position: 'absolute',
    bottom: 15,
    right: 5,
  },
  pencil: {
    borderRadius: 40,
    borderWidth: 1,
    borderColor: 'gray',
    width: 30,
    height: 30,
  },
});
