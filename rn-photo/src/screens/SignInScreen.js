import {useNavigation} from "@react-navigation/native";
import {Keyboard, StyleSheet, Text, View} from 'react-native';
import {AuthRoutes} from "../navigations/routes";
import Input, {InputTypes, ReturnKeyTypes} from "../components/Input";
import {useState, useRef} from "react";
import Button from '../components/Button';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import SafeInputView from "../components/SafeInputView";
import TextButton from "../components/TextButton";

const SignInScreen = () => {
    const navigation = useNavigation();
    const {top} = useSafeAreaInsets();


    const passwordRef = useRef();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoaing] = useState(false);
    const [disabled, setDisabled] = useState(false);


    useRef(() => {
        setDisabled(!email || password);
    },[email,password]);
    
    const onSubmit = () =>{
        Keyboard.dismiss();
        if (!disabled && !isLoading){
            setIsLoaing(true);
            console.log(email, password);
            setIsLoaing(false);
        }
    };

    return (
        <SafeInputView>
            <View style={[styles.container, {paddingTop: top}]}>
                <Text>Sign In</Text>
                <Input
                    styles={{ container :{marginBottom:20}}}
                    inputType={InputTypes.EMAIL}
                    ReturnKeyTypes={ReturnKeyTypes.NEXT}
                    value={email}
                    onSubmitEditing = {()=> passwordRef.current.focus()}
                    onChangeText = {(text) => setEmail(text.trim())}/>

                <Input
                    ref={passwordRef}
                    styles={{container : {marginBottom : 20}}}
                    inputType={InputTypes.PASSWORD}
                    ReturnKeyTypes={ReturnKeyTypes.DONE}
                    value={password}
                    onSubmitEditing = {onSubmit}
                    onChangeText={(text) => setPassword(text.trim())}/>
                <Button
                    title="로그인"
                    onPress={() => navigation.navigate(AuthRoutes.SIGN_UP)}
                    styles={{
                        container: {

                            marginTop: 20
                        }
                    }}/>
                <TextButton
                    title={'로그인'}
                    onPress={()=>navigation.navigate(AuthRoutes.SIGN_UP)}/>

            </View>
        </SafeInputView>

    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20
    }
});

// const inputStyles = StyleSheet.create({
//     container: {
//         marginBottom: 20,
//         paddingHorizontal: 20
//     },
//     input: {
//         borderWidth: 1
//     }
// });

export default SignInScreen;