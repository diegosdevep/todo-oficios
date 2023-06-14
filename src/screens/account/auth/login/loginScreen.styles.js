import { StyleSheet, Platform, Dimensions } from 'react-native';
import theme from '../../../../theme/theme';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 0 : 40,
  },

  leftCircle: {
    position: 'absolute',
    top: -260,
    right: -90,
    width: width * 0.98,
    height: width * 0.98,
    borderRadius: width * 0.575,
    backgroundColor: theme.colors.primary,
  },

  rightCircle: {
    position: 'absolute',
    top: -110,
    left: -50,
    width: width * 0.5,
    height: width * 0.5,
    borderRadius: width * 0.275,
    backgroundColor: theme.colors.black,
  },
});
