import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextStyle,
  Platform,
} from 'react-native';
import { Fonts, Typography } from '../styles';
import { Transaction } from './Transaction';

import { GlobalContext } from '../context/GlobalState';

export const TransactionList: React.FC = () => {
  const { state } = useContext(GlobalContext);
  const { transactions } = state;

  return (
    <View>
      <Text style={styles.transactionsLabel}>Transactions</Text>
      {transactions.length === 0 ? (
        <View style={styles.list}>
          <Text style={styles.emptyListText}>
            You have not added any transactions yet.
          </Text>
        </View>
      ) : (
        <FlatList
          style={styles.list}
          data={transactions}
          renderItem={({ item: transaction }) => (
            <Transaction transaction={transaction} />
          )}
        ></FlatList>
      )}
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
  },
  emptyListText: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    ...Fonts.poppinsLight[Platform.OS],
  } as TextStyle,
});
