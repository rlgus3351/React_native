import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SingInScreen from '../screens/SingInScreen';
import ListScreen from '../screens/ListScreen';
import { PRIMARY,WHITE } from '../colors';
import HeaderLeftButton from '../components/HeaderLeftButton';
import HeaderRightButton from '../components/HeaderRightButton';
import SettingsScreen from '../screens/SettingScreen';

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
