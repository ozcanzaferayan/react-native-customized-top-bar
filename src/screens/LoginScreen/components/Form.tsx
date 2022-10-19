import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import React, {useEffect} from 'react';
import {useForm, Controller} from 'react-hook-form';
import Spacer from '../../../components/Spacer';
import styles from './Form.styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {RootStackParamList} from '../../../../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type Props = {
  isPharmacyEnabled: boolean;
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login', undefined>;
};

type FormData = {
  email: string;
  password: string;
  sapCode: string;
};

type LoginResponse = {
  data: Data;
  message: string;
  success: boolean;
};

type Data = {
  expiration: string;
  token: string;
};
const PharmacyForm = ({isPharmacyEnabled, navigation}: Props) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      sapCode: '100001',
      password: '',
      email: '',
    },
  });

  useEffect(() => {
    AsyncStorage.getItem('loginResponse').then(value => {
      console.log(value);
      if (value) {
        navigation.navigate('Home');
      }
    });
  }, [navigation]);

  const onSubmit = ({sapCode, email}: FormData) => {
    const url =
      '' +
      new URLSearchParams({
        param1: isPharmacyEnabled ? sapCode : email,
      });
    console.log(url);
    fetch(url).then(response =>
      response.json().then((json: LoginResponse) => {
        console.log(json);
        if (!json.success) {
          Alert.alert('Hata', json.message);
          return;
        }
        AsyncStorage.setItem('loginResponse', JSON.stringify(json)).then(() => {
          navigation.navigate('Home');
        });
      }),
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {isPharmacyEnabled ? 'SAP KODU' : 'EMAIL'}{' '}
      </Text>
      {isPharmacyEnabled ? (
        <Controller
          control={control}
          rules={{
            required: isPharmacyEnabled,
            maxLength: 10,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              maxLength={10}
              keyboardType="numeric"
              textContentType="username"
              onChangeText={onChange}
              value={value}
            />
          )}
          name="sapCode"
        />
      ) : (
        <Controller
          control={control}
          rules={{
            required: !isPharmacyEnabled,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Geçersiz email',
            },
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              textContentType="emailAddress"
            />
          )}
          name="email"
        />
      )}
      {!isPharmacyEnabled && errors.email && (
        <Text style={styles.error}>{errors.email.message}</Text>
      )}
      {isPharmacyEnabled && errors.sapCode && (
        <Text style={styles.error}>{'SAP Kodu giriniz'}</Text>
      )}
      <Spacer orientation="vertical" size={12} />
      <Text style={styles.label}>ŞiFRE</Text>
      <Controller
        control={control}
        rules={{
          required: true,
          maxLength: 11,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            maxLength={11}
            value={value}
            secureTextEntry={true}
          />
        )}
        name="password"
      />
      {errors.password && <Text style={styles.error}>{'Parola giriniz'}</Text>}
      <TouchableOpacity
        style={styles.signInButton}
        onPress={handleSubmit(onSubmit)}>
        <Text style={styles.signInButtonText}>Giriş yap</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PharmacyForm;
