/* eslint-disable prettier/prettier */
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

    Buttons: {
        zIndex:5,
        width: 120,
        marginLeft: "33%",
        marginTop:90
    },

    linearGradient: {
        zIndex: -1,
        flex: 1,
        paddingLeft: 0,
        paddingRight: 0,
        borderRadius: 5
      },

    logo: {
        marginTop: 14,
        zIndex: 8,
        alignContent: "flex-start",
        position: "relative",
        width:"100%"

    },

    background: {
        zIndex:-2,
        flex: 1,
        resizeMode: 'cover',
    }


})
