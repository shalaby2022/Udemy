import {NavigationContainer} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Planner from '../screens/Planner';
import {Image} from 'react-native';
import {ReactNode} from 'react';
import WorkOutDetails from '../screens/WorkOutDetails';
import {RootStackParamList, StackParamList} from '../types/stacks';

type tabIconProps = {
  focused: boolean;
  size: number;
  color: string;
};

export default () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

const Stack = createNativeStackNavigator<StackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Root" component={TabNavigator} />
      <Stack.Screen
        name="WorkOutDetails"
        component={WorkOutDetails}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator<RootStackParamList>();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused, color, size}: tabIconProps): ReactNode => {
            return (
              <Image
                source={require('../assets/home.png')}
                style={{
                  tintColor: focused ? '#000' : '#888',
                  width: focused ? 24 : 22,
                  height: focused ? 24 : 22,
                }}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Planner"
        component={Planner}
        options={{
          tabBarIcon: ({focused, color, size}: tabIconProps): ReactNode => {
            return (
              <Image
                source={require('../assets/to-do-list.png')}
                style={{
                  tintColor: focused ? '#000' : '#888',
                  width: focused ? 24 : 22,
                  height: focused ? 24 : 22,
                }}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
