import { useUserContext } from '../contexts/UserContext';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './Mainstack';
import AuthStack from './AuthStack';

const Navigation = () => {
  const { user } = useUserContext();

  return (
    <NavigationContainer>
      { user ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Navigation;