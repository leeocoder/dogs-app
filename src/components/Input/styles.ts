import theme from '@/general/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    fontFamily: theme.fonts.medium,
    fontSize: 16,
    paddingHorizontal: 18,
    paddingVertical: 18,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.slate[300],
    backgroundColor: theme.colors.slate[50],
    color: theme.colors.slate[800],
  },
});
