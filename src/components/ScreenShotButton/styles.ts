import { Inter_400Regular } from '@expo-google-fonts/inter';
import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
      width: Inter_400Regular,
      height: Inter_400Regular,
      borderRadius:4,
      backgroundColor: theme.colors.surface_secondary,
      justifyContent:  'center',
      alignItems: 'center', 
      marginRight: 8
  }, 

  removeIcon: {
      position: 'absolute',
      bottom: 0,
      rigth: 0,
  },
  image: {
    width: 40,
    height: 40
  }
});