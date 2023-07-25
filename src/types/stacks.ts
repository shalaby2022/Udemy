import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type StackParamList = {
  Root: undefined;
  WorkOutDetails: {
    slug: string;
  };
};

export type RootStackParamList = {
  Home: {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
  };
  Planner: undefined;
};
