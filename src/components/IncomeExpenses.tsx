import { View, Text, StyleSheet, Platform, TextStyle } from 'react-native';
import { Fonts, Typography } from '../styles';

export const IncomeExpenses: React.FC = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.incomeLabel}>Income</Text>
        <Text style={[styles.money, styles.moneyPlus]}>+0.00 BGN</Text>
      </View>
      <View>
        <Text style={styles.expenseLabel}>Expense</Text>
        <Text style={[styles.money, styles.moneyMinus]}>-0.00 BGN</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  money: {
    ...Fonts.poppinsSemiBold[Platform.OS],
    fontSize: 20,
    letterSpacing: 1,
    marginTop: 5,
    marginHorizontal: 0,
  } as TextStyle,
  incomeLabel: {
    ...Typography.h4,
  } as TextStyle,
  moneyPlus: {
    color: '#2ecc71',
  },
  expenseLabel: {
    ...Typography.h4,
  } as TextStyle,
  moneyMinus: {
    color: '#c0392b',
  },
});
