import { Dimensions, StyleSheet, Platform } from 'react-native';
import theme from '../../../../theme/theme';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 0 : 40,
  },

  rightCircle: {
    backgroundColor: theme.colors.primary,
    position: 'absolute',
    width: width * 0.5,
    height: width * 0.5,
    borderRadius: width * 0.275,
    left: -50,
    top: -110,
  },
  leftCircle: {
    backgroundColor: theme.colors.black,
    position: 'absolute',
    width: width * 0.98,
    height: width * 0.98,
    borderRadius: width * 0.575,
    right: -90,
    top: -260,
  },
});
