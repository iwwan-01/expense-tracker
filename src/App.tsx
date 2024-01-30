import { View, StyleSheet, Dimensions } from 'react-native';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

const windowHeight = Dimensions.get('window').height;

const App: React.FC = () => {
  return (
    <View style={styles.body}>
      <Header />
      <View style={styles.container}>
        <Balance />
        <IncomeExpenses />
      </View>
      <TransactionList />
      <AddTransaction />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: windowHeight,
    margin: 0,
  },
  container: {
    marginTop: 20,
    marginHorizontal: 'auto',
    paddingTop: 20,
    paddingHorizontal: 30,
    width: 350,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dedede',
  },
});

export default App;
