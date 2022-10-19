import {SafeAreaView} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen/SettingsScreen';
import MyTabs from '../../MyTabs';

export type RootStackParamList = {
  Logined: undefined;
  Settings: undefined;
};

const Tab = createMaterialTopTabNavigator<RootStackParamList>();
const HomeNavigation = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Tab.Navigator tabBar={tabBarProps => <MyTabs {...tabBarProps} />}>
        <Tab.Screen name="Logined" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default HomeNavigation;
