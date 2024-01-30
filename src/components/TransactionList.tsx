import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextStyle,
  Platform,
} from 'react-native';
import { Fonts, Typography } from '../styles';

interface Transaction {
  id: number;
  type: string;
  value: number;
  note: string;
}

const transactionsData: Transaction[] = [
  { id: 3, type: 'income', value: 500, note: 'Cash' },
  { id: 1, type: 'expense', value: 40, note: 'Book' },
  { id: 2, type: 'expense', value: 200, note: 'Camera' },
];

export const TransactionList: React.FC = () => {
  return (
    <View>
      <Text style={styles.transactionsLabel}>Transactions</Text>
      <FlatList
        style={styles.list}
        data={transactionsData}
        renderItem={
          /* Replace with TransactionItem Component 👇🏻 */
          ({ item: transaction }) => (
            <View style={styles.listItem}>
              <Text style={styles.transactionNote}>{transaction.note}</Text>
              <Text
                style={[
                  styles.transactionValue,
                  transaction.type === 'expense'
                    ? styles.transactionMinus
                    : styles.transactionPlus,
                ]}
              >
                {transaction.type === 'expense' ? '- ' : '+ '}
                {transaction.value}
              </Text>
            </View>
          )
        }
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  transactionsLabel: {
    ...Typography.h3,
  } as TextStyle,
  list: {
    width: 350,
    padding: 0,
    // marginBottom: 40,
  },
  listItem: {
    backgroundColor: '#fff',
    color: '#333',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    marginVertical: 2,
  },
  transactionNote: {
    margin: 0,
    fontSize: 20,
    ...Fonts.poppinsRegular[Platform.OS],
  } as TextStyle,
  transactionValue: {
    ...Fonts.poppinsSemiBold[Platform.OS],
    fontSize: 20,
    letterSpacing: 1,
    marginTop: 5,
    marginHorizontal: 0,
  } as TextStyle,
  transactionPlus: {
    color: '#2ecc71',
  },
  transactionMinus: {
    color: '#c0392b',
  },
});
