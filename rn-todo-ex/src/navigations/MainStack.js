import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListScreen from "../screens/ListScreen";
import { PRIMARY, WHITE } from "../color";
import HeaderLeftButton from "../components/HeaderLeftButton";
import HeaderRightbutton from "../components/HeaderRightButton";
import SettingScreen from "../screens/SettingScreen";


const Stack = createNativeStackNavigator();

const MainStack = () =>{
    return(
        <Stack.Navigator 
            screenOptions={{
                contentStyle : {backgroundColor : WHITE},
                headerTitleAlign : 'center',
                headerTintColor : PRIMARY.DEFAULT,
                headerTitleStyle:{
                    fontWeight:'700',
                },
                headerLeft:HeaderLeftButton,
            }}
        >
            <Stack.Screen 
                name='List' 
                component={ListScreen} 
                options={{
                    title:'TODO List', 
                    headerRight : HeaderRightbutton,
                    }}
                />
            <Stack.Screen name='Settings' component={SettingScreen}/>
        </Stack.Navigator>

    );
};


export default MainStack;