import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SingInScreen from '../screens/SingInScreen';
import { WHITE } from '../colors';


const Stack = createNativeStackNavigator();

const AuthStack = (props) => {
  return (
    <Stack.Navigator 
      screenOptions={{
        contentStyle:{ backgroundColor:WHITE },
        headerShown:false,
      }}
    >
    
      <Stack.Screen
        name="SignIn">
          {(screenProps) => <SingInScreen {...screenProps} {...props} />}
        </Stack.Screen>
    </Stack.Navigator>
  );
};

export default AuthStack;
