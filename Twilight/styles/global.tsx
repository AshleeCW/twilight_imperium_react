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
export const backs = StyleSheet.create({
    testBacks: {
        backgroundColor:"yellow",
        width:"90%",
        alignSelf: "center",
        top: 20
    }

})


export const globalStyles = StyleSheet.create({
    CheckBox: {
        color:"black",
        margin: 10,
        flexGrow: 1,
        height: 100,
    },

    RandomRaceForm: {
        backgroundColor:"#e0e0e0",
        width:"90%",
        alignSelf: "center",
        top: 20
    },

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
