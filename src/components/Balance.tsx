import { View, Text, StyleSheet, Platform, TextStyle } from 'react-native';
import { Fonts } from '../styles';

export const Balance: React.FC = () => {
  return (
    <View>
      <Text style={styles.balanceLabel}>Your Balance</Text>
      <Text style={styles.balance}>$0.00</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  balanceLabel: {
    margin: 0,
    textTransform: 'uppercase',
    fontSize: 20,
    ...Fonts.poppinsMedium[Platform.OS],
  } as TextStyle,
  balance: {
    letterSpacing: 1,
    margin: 0,
    fontSize: 34,
    ...Fonts.poppinsSemiBold[Platform.OS],
  } as TextStyle,
});
