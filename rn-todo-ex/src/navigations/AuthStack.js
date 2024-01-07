import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import ListScreen from '../screens/ListScreen';
import { WHITE } from '../color';
import HeaderLeftButton from '../components/HeaderLeftButton';
import HeaderRightbutton from '../components/HeaderRightButton';
import SettingScreen from '../screens/SettingScreen';

const Stack = createNativeStackNavigator();


const AuthStack = () => {
    return(
        <Stack.Navigator 
            initialRouteName='singIn'
            screenOptions={{
                contentStyle : {backgroundColor : WHITE},
                headerTitleAlign : 'center',
                headerLeft:HeaderLeftButton,
                headerShown:false,
            }}
        >
            <Stack.Screen name='SignIn' component={SignInScreen}/>
             
        </Stack.Navigator>
    );
};

export default AuthStack;