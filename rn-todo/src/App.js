import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SingInScreen from './screens/SingInScreen';
import TestAvoid from './screens/TextAvoid';
import {WHITE} from './colors'

const App = () =>{
  return (
    <View style={styles.container}>
      
      <StatusBar style="dark" />
        <Text style={{ fontSize:30}}>TODO App</Text>
        <SingInScreen/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
});

export default App;

