import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Form from './components/Form';
import type {RouteProp} from '@react-navigation/native';

const LoginScreen = (props: any) => {
  const [isPharmacyEnabled, setIsPharmacyEnabled] = useState(true);
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Image
        source={require('../../assets/login.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.bottomContainer}>
        <Text style={styles.headerText}>Giriş Yap</Text>
        <View style={styles.formHeaderButtons}>
          <TouchableOpacity onPress={() => setIsPharmacyEnabled(true)}>
            <Text
              style={[
                styles.formHeaderText,
                isPharmacyEnabled ? styles.formHeaderTextActive : {},
              ]}>
              ECZACI
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsPharmacyEnabled(false)}>
            <Text
              style={[
                styles.formHeaderText,
                !isPharmacyEnabled ? styles.formHeaderTextActive : {},
              ]}>
              PERSONEL
            </Text>
          </TouchableOpacity>
        </View>
        <Form
          navigation={props.navigation}
          isPharmacyEnabled={isPharmacyEnabled}
        />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  image: {
    width: '100%',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 36,
  },
  formHeaderButtons: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  formHeaderText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  formHeaderTextActive: {
    textDecorationLine: 'underline',
  },
  bottomContainer: {
    backgroundColor: '#0666A7',
    flex: 1,
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
  },
});
