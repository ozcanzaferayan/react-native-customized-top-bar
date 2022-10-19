import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const MyTabs = ({state, descriptors, navigation, position}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 8,
        backgroundColor: '#686de0',
      }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={{color: '#fff'}}>{'🔙'}</Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            padding: 3,

            borderRadius: 8,
            backgroundColor: '#2c3e50',
          }}>
          {state.routes.map((route, index) => {
            const {options} = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;
            const isFocused = state.index === index;
            const handleNavigation = () => {
              navigation.navigate({name: route.name});
            };
            return (
              <View
                style={{
                  backgroundColor: isFocused ? '#2980b9' : '#3498db',
                  paddingHorizontal: 8,
                  paddingVertical: 5,
                  borderRadius: 10,
                }}>
                <TouchableOpacity onPress={handleNavigation}>
                  <Text style={{color: 'white'}}>{label}</Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </View>
      <TouchableOpacity>
        <Text>🔔</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyTabs;
