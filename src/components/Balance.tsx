import { View, Text, StyleSheet, Platform, TextStyle } from 'react-native';
import { Fonts, Typography } from '../styles';

export const Balance: React.FC = () => {
  return (
    <View>
      <Text style={styles.balanceLabel}>Your Balance</Text>
      <Text style={styles.balance}>0.00 BGN</Text>
      <Text style={styles.balanceEur}>€0.00</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  balanceLabel: {
    ...Typography.h4,
  } as TextStyle,
  balance: {
    letterSpacing: 1,
    margin: 0,
    fontSize: 34,
    ...Fonts.poppinsSemiBold[Platform.OS],
  } as TextStyle,
  balanceEur: {
    letterSpacing: 1,
    margin: 0,
    fontSize: 18,
    ...Fonts.poppinsRegular[Platform.OS],
  } as TextStyle,
});
