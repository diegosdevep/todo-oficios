import { StyleSheet, Dimensions, Platform } from 'react-native';
import theme from '../../../theme/theme';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 30,
    alignItems: 'center',
    marginTop: Platform.OS === 'android' ? 140 : 60,
  },
  containerTitle: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 38,
    fontWeight: theme.fontWeight.bold,
    color: theme.colors.primary,
  },
  img: {
    width: 170,
    height: 170,
    borderRadius: 100,
  },
  form: {
    width: width * 0.8,
  },
  input: {
    width: '100%',
    padding: 10,
    fontSize: theme.fontSize.lg,
  },
  btn: {
    width: width * 0.8,
    borderRadius: 6,
    marginTop: 20,
    backgroundColor: theme.colors.primary,
  },
  btnStyle: {
    padding: 12,
    backgroundColor: theme.colors.primary,
  },
  btnText: {
    fontSize: theme.fontSize.lg,
  },
  text: {
    fontSize: theme.fontSize.md,
    marginTop: 20,
    textAlign: 'center',
    color: theme.colors.grey,
  },
  span: {
    fontWeight: theme.fontWeight.bold,
    color: theme.colors.primary,
  },
});
