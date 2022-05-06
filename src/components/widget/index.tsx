import React,{useRef} from 'react';
import { TouchableOpacity } from 'react-native';
import { ChatTeardropDots} from 'phosphor-react-native'
import { theme } from '../../theme';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { styles } from './styles';
import BottomSheet from '@gorhom/bottom-sheet';

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

      </BottomSheet>
    </>
  );
}

export default gestureHandlerRootHOC(Widget);