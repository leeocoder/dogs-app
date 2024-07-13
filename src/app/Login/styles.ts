import theme from '@/general/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  imageContainer: {
    width: '100%',
    position: 'relative',
  },
  image: {
    width: '100%',
  },
  logoContainer: {
    position: 'absolute',
    width: '100%',
    top: 70,
    zIndex: 1,
    alignItems: 'center',
  },
  loginInputContainer: {
    width: '100%',
    height: '100%',
    top: -20,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: 'center',
  },
  messageLogin: {
    color: theme.colors.primary[900],
    fontFamily: theme.fonts.semiBold,
    fontSize: 18,
    textAlign: 'center',
    maxWidth: 260,
    marginVertical: 32,
  },
  buttons: {
    rowGap: 16,
    width: '100%',
    paddingHorizontal: 22,
  },
  buttonLogin: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary[400],
    borderRadius: 8,
    paddingVertical: 18,
  },
  buttonLabel: {
    fontFamily: theme.fonts.medium,
    fontSize: 16,
    color: theme.colors.primary[800],
  },
  buttonRegister: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 18,
    borderWidth: 2,
    borderColor: theme.colors.primary[400],
  },
});
