import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginPage from './src/pages/Login/Login';

export default function App() {
  return (
    <View style={styles.container}>
      <LoginPage></LoginPage>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fffff',
    flex: 1,
    justifyContent: 'center',
  },
});
