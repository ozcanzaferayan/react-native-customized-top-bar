import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({navigation}: any) => {
  const [pharmacy, setPharmacy] = useState(null);
  useEffect(() => {
    AsyncStorage.getItem('loginResponse').then(value => {
      console.log(value);
      console.log('Token', JSON.parse(value).data.token);
      if (value) {
        fetch('', {
          method: 'GET',
          headers: {
            Authorization: 'Bearer ' + JSON.parse(value).data.token,
          },
        })
          .then(response => response.json())
          .then(data => {
            setPharmacy(data.data[0].rel_related_account_label);
          });
      }
    });
  }, []);

  return <View>{pharmacy && <Text>{pharmacy}</Text>}</View>;
};

export default HomeScreen;
