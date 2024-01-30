import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  TextStyle,
} from 'react-native';
import { Fonts, Typography } from '../styles';

export const AddTransaction = () => {
  const [transactionNote, setTransactionNote] = useState('');
  const [transactionValue, setTransactionValue] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.addTransactionLabel}>Add new transaction</Text>
      <View>
        <Text style={styles.transactionFieldLabel}>Transaction Note</Text>
        <TextInput
          style={styles.transactionFieldTextInput}
          placeholder='Please enter a transaction note'
          onChangeText={setTransactionNote}
          value={transactionNote}
        />
      </View>
      <View>
        <Text style={styles.transactionFieldLabel}>Transaction Value</Text>
        <TextInput
          style={styles.transactionFieldTextInput}
          placeholder='Please enter a transaction value'
          onChangeText={setTransactionValue}
          value={transactionValue}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 350,
  },
  addTransactionLabel: {
    ...Typography.h3,
  } as TextStyle,
  transactionFieldLabel: {
    marginTop: 10,
    marginHorizontal: 0,
    fontSize: 18,
    ...Fonts.poppinsRegular[Platform.OS],
  } as TextStyle,
  transactionFieldTextInput: {
    marginTop: 10,
    marginHorizontal: 0,
    fontSize: 14,
    ...Fonts.poppinsLight[Platform.OS],
    borderWidth: 1,
    borderRadius: 40,
    borderColor: '#dedede',
    paddingVertical: 5,
    paddingLeft: 15,
  } as TextStyle,
});
