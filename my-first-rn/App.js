import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const name = 'gihyun';
  const isFullname = true;
  const add = (a,b) => {
    return a+b;
  };

  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text>1 + 2 = {add(1,2)}</Text>
      <Text>{isFullname === true ? name + 'kwon' : name}</Text>
      <StatusBar style="auto" />
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
});
