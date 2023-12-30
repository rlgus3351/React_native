import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SingInScreen from '../screens/SingInScreen';
import ListScreen from '../screens/ListScreen';
import { WHITE } from '../colors';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName='SignIn'
      screenOptions={{
        contentStyle : {backgroundColor : WHITE},
      }}
    >
      <Stack.Screen name="List" component={ListScreen} />
      <Stack.Screen name="SignIn" component={SingInScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
