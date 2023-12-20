import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SingInScreen from './screens/SingInScreen';
import TestAvoid from './screens/TextAvoid';

const App = () =>{
  return (
    <View style={styles.container}>
      
      <StatusBar style="dark" />
        <Text style={{ fontSize:30}}>TODO App</Text>
        {/* <SingInScreen/> */}
        <TestAvoid/>
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

