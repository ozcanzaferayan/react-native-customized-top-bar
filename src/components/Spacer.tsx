import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

type Props = {
  orientation: 'horizontal' | 'vertical';
  size: number;
};

const Spacer = (props: Props) => {
  return <View style={styles(props).container} />;
};

const styles = ({orientation, size}: Props) =>
  StyleSheet.create({
    container: {
      width: orientation === 'horizontal' ? size : 0,
      height: orientation === 'vertical' ? size : 0,
    },
  });

export default Spacer;
