import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from "react";


const Navigation =  () => {
    useEffect(()=>{
        (async () =>{
            try{
                await SplashScreen.preventAutoHideAsync();
            }catch(e){
                console.log(e);
            }
        })();
    },[]);
    return (
        <NavigationContainer>
            <AuthStack/>
        </NavigationContainer>
    );
};

export default Navigation;