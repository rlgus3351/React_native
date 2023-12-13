import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './components/Button';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
    
      <Text style={[styles.text]}>Calc App</Text>
      <Button
        title={"1234"}
        onPress={() => console.log("click!")}
        color="purple"
        />
      <Button/>
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
    fontSize:30,
    fontWeight:'700',
    color:'green',
  },
  error:{
    color:'red',
  },
  button : {
    backgroundColor : 'black',
    color : 'white'
  },
});

  
export default App;