import {View, Button, SafeAreaView} from 'react-native';
import React from 'react';

const Login = props => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Button
        title="Login"
        onPress={() => {
          props.navigation.navigate('BottomTabs');
        }}
      />
    </SafeAreaView>
  );
};

export default Login;
