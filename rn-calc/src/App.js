import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button, { ButtonTypes } from './components/Button';
import { useState } from 'react';

const App = () => {

  const [result,setResult] = useState(0);

  setResult((result) => {
    result = result+1;
    return result;
  });
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.resultContainer}>
        <Text style={styles.text}>{result}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Text>Button</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize:60,
    fontWeight:'700',
    color:'green',
  },
  resultContainer: {
    flex:1,
    backgroundColor:'#000000',
  },
  buttonContainer:{
    flex:1,
    backgroundColor:'#A5B4FC'
  }
});

  
export default App;