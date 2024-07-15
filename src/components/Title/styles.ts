import theme from '@/general/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  title: {
    fontFamily: theme.fonts.secondBold,
    fontSize: 48,
    color: theme.colors.slate[800],
    marginTop: 8,
  },
  separator: {
    width: 30,
    height: 30,
    backgroundColor: theme.colors.primary[400],
    borderRadius: 8,
    position: 'absolute',
    zIndex: -1,
    top: 38,
    left: -8,
  },
});
