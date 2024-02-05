import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "../screens/MainScreen";
import { PRIMARY, WHITE } from "../colors";
import HeaderLeftButton from "../components/HeaerLeftButton";
import HeaderRightButton from "../components/HeaderRightButton";
import SettingsScreen from "../screens/SettingScreen";


const Stack = createNativeStackNavigator();

const MainStack = () => {
    return(
        <Stack.Navigator screenOptions={{
            contentStyle : { backgroundColor:WHITE },
            headerTitleAlign:'center',
            headerTintColor:PRIMARY.DEFAULT,
            headerTitleStyle:{
                fontWeight:'700',
            },
            headerLeft:HeaderLeftButton,
        }}
        >
            <Stack.Screen 
                name="List"
                component={MainScreen}
                options={{
                    title:"TODO List",
                    headerRight: HeaderRightButton,
                }}
                />
            <Stack.Screen name="Settings" component={SettingsScreen}/>
        </Stack.Navigator>
    );
};

export default MainStack;