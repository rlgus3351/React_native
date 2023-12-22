import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SingInScreen from '../screens/SingInScreen';
import ListScreen from '../screens/ListScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SingInScreen} />
      <Stack.Screen name="List" component={ListScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
