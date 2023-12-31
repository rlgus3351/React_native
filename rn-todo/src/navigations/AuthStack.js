import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SingInScreen from '../screens/SingInScreen';
import ListScreen from '../screens/ListScreen';
import { WHITE } from '../colors';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName='SignIn'>
      <Stack.Screen name="List" component={ListScreen} />
      <Stack.Screen name="SignIn" component={SingInScreen} 
        options={{
          contentStyle:{
            backgroundColor:'lavender',
            borderRadius:50,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
