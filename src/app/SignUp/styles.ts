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
    color: theme.colors.primary[900],
    fontFamily: theme.fonts.bold,
    maxWidth: 270,
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
    color: theme.colors.primary[900],
  },
  linkLogin: {
    borderBottomWidth: 2,
    borderBottomColor: theme.colors.primary[900],
  },
});
