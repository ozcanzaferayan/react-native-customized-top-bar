import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/HomeNavigation';

type Props = NativeStackScreenProps<RootStackParamList, 'Logined'>;

const HomeScreen = (props: Props) => {
  props;
  const [pharmacy, setPharmacy] = useState(null);
  useEffect(() => {
    AsyncStorage.getItem('loginResponse').then(value => {
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
