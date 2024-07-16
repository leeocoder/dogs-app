import theme from '@/general/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 22,
    backgroundColor: '#fff',
  },
  logo: { marginBottom: 32 },
  title: {
    fontSize: 18,
    color: theme.colors.slate[500],
    fontFamily: theme.fonts.bold,
    maxWidth: 300,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 32,
  },
  buttonWrapper: {
    width: '100%',
  },
});
