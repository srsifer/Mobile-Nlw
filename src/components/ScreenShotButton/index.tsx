import { Trash, Camera } from 'phosphor-react-native';
import React from 'react';
import {
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import { theme } from '../../theme';

import { styles } from './styles';

interface Props {
  screenShot: string | null;
  onTakeShot: () => void;
  onRemoveShot: () => void
}

export function ScreenShotButton({ screenShot, onTakeShot, onRemoveShot }: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={screenShot ? onRemoveShot : onTakeShot}
    >
      {
        screenShot
        ? 
        <View>
          <Image 
            style={styles.image}
            source={{uri: screenShot}}
          />
          <Trash 
          size={22}
          color={theme.colors.surface_secondary}
          weight='fill'
          style={styles.removeIcon}
        />
        </View>
        :
        <Camera 
          size={24}
          color={theme.colors.surface_primary}
          weight='bold'
        />
      }
    </TouchableOpacity>
  );
}