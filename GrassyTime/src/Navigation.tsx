import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootNavigation = {
  Login: undefined;
  Home: undefined;
};

export type HomeProps = NativeStackScreenProps<RootNavigation, 'Home'>;