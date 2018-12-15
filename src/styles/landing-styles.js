import { StyleSheet } from 'react-native';
import { COLOR_NAVIGATION_BLUE } from '../assets/colors/colors';
import { FONT_AVENIR_BOOK } from '../assets/fonts/fonts';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    
      button: {
        backgroundColor: COLOR_NAVIGATION_BLUE,
        marginTop: 500,
        width: 320,
        height: 47,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
      },
    
      title: {
        fontFamily: FONT_AVENIR_BOOK,
        fontSize: 18,
        color: 'white',
      }
});
