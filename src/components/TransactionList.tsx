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
  const { transactions } = useContext(GlobalContext);

  return (
    <View>
      <Text style={styles.transactionsLabel}>Transactions</Text>
      <FlatList
        style={styles.list}
        data={transactions}
        renderItem={({ item: transaction }) => (
          <Transaction transaction={transaction} />
        )}
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
  },
});
