import { ArrowLeft } from 'phosphor-react-native';
import { captureScreen } from 'react-native-view-shot';

import React,{useState} from 'react';
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
import { Botton } from '../../components/Botton';

import { theme } from '../../theme';
import { styles } from './styles';

import { api } from '../../libs/api';
import * as FileSystem from 'expo-file-system'

interface Props {
  feedbackType: FeedbackType;
  onFeedbackCanceled: () => void;
  onFeedbackSent: () => void;
}

export function Form({ 
  feedbackType,
  onFeedbackCanceled,
  onFeedbackSent,
 }: Props) {

  const feedbackTypeInfo = feedbackTypes[feedbackType];

  const [screenShot, setScreenShot] = useState<string | null>(null);
  const [isSendingFeedback, setIsSendingFeedback] = useState(false)
  const [comment, setComment] = useState("")

  function handleScreenshot() { 
    captureScreen({
      format: "jpg",
      quality: 0.8
    })
    .then(uri => setScreenShot(uri))
    .catch(error => console.log(error))
  }

  function handleScreenShotRemove() {
      setScreenShot(null)
  }

  async function handleSendFeedback() {
    if(isSendingFeedback){
      return;
    }

    setIsSendingFeedback(true)

    const screenShotBase64 = screenShot && await FileSystem.readAsStringAsync(screenShot, {encoding: 'base64'});

    try {
      await api.post("/feedbacks", {
        type: feedbackType,
        screenshot: `data:image/png;base64, ${screenShotBase64}`,
        comment,
      });

      onFeedbackSent();

    } catch (error) {
      console.log(error)
      setIsSendingFeedback(false)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={onFeedbackCanceled}
        >
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
           autoCorrect={false}
           onChangeText={setComment}
        />
        <View style={styles.footer}>
          <ScreenShotButton 
            onTakeShot={handleScreenshot}
            onRemoveShot={handleScreenShotRemove}
            screenShot={screenShot}
          />
          <Botton 
            isLoading={isSendingFeedback} 
            onPress={handleSendFeedback}
          />
        </View>
    </View>
  );
}