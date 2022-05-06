import { ArrowLeft } from 'phosphor-react-native';
import React from 'react';
import {
  View,
  TextInput,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

import { feedbackTypes } from '../../utils/feedbackTypes'
import { FeedbackType } from '../../components/widget';
import { ScreenShotButton } from '../../components/ScreenShotButton';
import { theme } from '../../theme';
import { styles } from './styles';

interface Props {
  feebackType: FeedbackType;
}

export function Form({ feebackType }: Props) {
  const feedbackTypeInfo = feedbackTypes[feebackType];


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <ArrowLeft
            size={34}
            weight="bold"
            color={theme.colors.text_secondary}
          />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Image
            source={feedbackTypeInfo.image}
            style={styles.image}
          />
          <Text style={styles.titleText}>
            {feedbackTypeInfo.title}
          </Text>
        </View>
      </View>
        <TextInput 
           multiline
           style={styles.input}
           placeholder="Algo não está funcionando bem? queremos corrigir. Conte com detalhes oque está acontecendo"
           placeholderTextColor={theme.colors.text_secondary}

        />
    </View>
  );
}