import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SingInScreen from './screens/SignInScreen';

const App = () =>{
  return (
    <View style={styles.container}>
      
      <StatusBar style="dark" />
        <SingInScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;