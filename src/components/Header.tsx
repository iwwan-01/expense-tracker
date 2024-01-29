import { View, Text, StyleSheet, Platform, TextStyle } from 'react-native';
import { Fonts } from '../styles';

export const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hello! 👋🏻</Text>
      <Text style={styles.name}>Ivan Patarov</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 350,
  },
  greeting: {
    fontSize: 20,
    ...Fonts.poppinsRegular[Platform.OS],
  } as TextStyle,
  name: {
    fontSize: 24,
    ...Fonts.poppinsMedium[Platform.OS],
  } as TextStyle,
});
