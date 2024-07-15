import theme from '@/general/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 22,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    color: theme.colors.slate[500],
    fontFamily: theme.fonts.bold,
    maxWidth: 250,
    marginVertical: 32,
  },
  form: {
    rowGap: 16,
    marginBottom: 32,
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 32,
  },
  bottomText: {
    fontSize: 16,
    fontFamily: theme.fonts.bold,
    maxWidth: 200,
    textAlign: 'center',
    color: theme.colors.slate[500],
  },
  linkLogin: {
    borderBottomWidth: 2,
    borderBottomColor: theme.colors.slate[500],
  },
});
