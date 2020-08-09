import { StyleSheet } from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
export const images = {
    background: require('../assets/space_background_reduced.png'),
    
  };

export const globalStyles = StyleSheet.create({


    linearGradient: {
        background: images.background,
        flex: 1,
        paddingLeft: 0,
        paddingRight: 0,
        borderRadius: 5
      },

     

})
