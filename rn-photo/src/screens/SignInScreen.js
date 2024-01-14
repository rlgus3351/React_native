import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View} from 'react-native';
import { AuthRoutes } from "../navigations/routes";
import Input,{InputTypes,ReturnKeyTypes} from "../components/Input";
import { useState } from "react";
import Button from '../components/Button';


const SignInScreen = () =>{
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    return(
        <View style={styles.container}>
            <Text>Sign In</Text>
            <Input
                styles={inputStyles}
                inputType={InputTypes.EMAIL}
                ReturnKeyTypes= {ReturnKeyTypes.NEXT}
                value={email}
                onChangeText = {(text) => setEmail(text.trim())}
                />
            <Input
                styles={inputStyles}
                inputType={InputTypes.PASSWORD}
                ReturnKeyTypes= {ReturnKeyTypes.DONE}
                value={password}
                onChangeText={(text) => setPassword(text.trim())}
                />
            <Button 
                title="Sign Up"
                onPress={()=>navigation.navigate(AuthRoutes.SIGN_UP)}
                styles={{
                    container:{
                        paddingHorizontal :20,
                        marginTop : 20,
                    },
                }}
            />
        </View>
    );

};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
});

const inputStyles = StyleSheet.create({
    container : {
        marginBottom:20,
        paddingHorizontal:20,
    },
    input:{
        borderWidth:1,
    },

});

export default SignInScreen;