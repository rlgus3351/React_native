import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './navigations/AuthStack';
import { useState } from 'react';
import MainStack from './navigations/MainStack';
import UserContext from './contexts/UserContext';


const App = () =>{
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={'gihyun'}>
      <NavigationContainer>

        <StatusBar style="dark" />
        {user ? (
          <MainStack user = {user} setUser = {setUser}/>
        ):(
          <AuthStack user = {user} setUser = {setUser}/>
        )}
      </NavigationContainer>
    </UserContext.Provider>
    );
    
}





export default App;

