import React,{useRef} from 'react';
import { TouchableOpacity } from 'react-native';
import { ChatTeardropDots} from 'phosphor-react-native'
import { theme } from '../../theme';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { styles } from './styles';
import BottomSheet from '@gorhom/bottom-sheet';
import { Options } from '../options';
import { Form } from '../Form';
import { Success } from '../Success';
import { feedbackTypes } from '../../utils/feedbackTypes';

export type FeedbackType = keyof typeof feedbackTypes;

function Widget() {

  const bottomSheetRef = useRef<BottomSheet>(null);

  function handleOpen(){
    bottomSheetRef.current?.expand();
  }

  return (
    <>
      <TouchableOpacity 
        style={styles.button}
        onPress={handleOpen}
      >

        <ChatTeardropDots 
          size={24}
          weight="bold"
          color={theme.colors.text_on_brand_color}
        />
      </TouchableOpacity>

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[1 , 600]}
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}
      >
       {/*  <Options /> */}
        <Form 
          feebackType='BUG'
        />
      </BottomSheet>
    </>
  );
}

export default gestureHandlerRootHOC(Widget);