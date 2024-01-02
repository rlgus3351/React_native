import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './navigations/AuthStack';
import { useState } from 'react';
import MainStack from './navigations/MainStack';


const App = () =>{
  const [user, setUser] = useState(null);
  return (
    <NavigationContainer>
      
      <StatusBar style="dark" />
      {user ? (
        <MainStack user = {user} setUser = {setUser}/>
      ):(
        <AuthStack user = {user} setUser = {setUser}/>
      )}
    </NavigationContainer>
  );
}

export default App;

