import { View, StyleSheet, Dimensions } from 'react-native';
import { Header } from './components/Header';
import { Balance } from './components/Balance';

const windowHeight = Dimensions.get('window').height;

const App: React.FC = () => {
  return (
    <View style={styles.body}>
      <Header />
      <View style={styles.container}>
        <Balance />
      </View>
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
    marginTop: 30,
    marginHorizontal: 'auto',
    width: 350,
  },
});

export default App;
