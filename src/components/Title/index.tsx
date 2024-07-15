import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

type TitleProps = {
  text: string;
};

const Title = ({ text }: TitleProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{text}</Text>
      <View style={styles.separator} />
    </View>
  );
};

export default Title;
