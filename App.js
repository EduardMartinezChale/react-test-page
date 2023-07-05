import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <View style={styles.container}>
      <div class="container">
        <div class="row">
          <div class="col-6">Pagina</div>
          <div class="col-6">Test</div>
        </div>
      </div>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'start',
  },
});
