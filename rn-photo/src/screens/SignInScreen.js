import {Image, StyleSheet, View, Keyboard} from 'react-native';
import Input,{InputTypes, ReturnKeyTypes} from '../components/Input';
import { useState, useRef, useEffect, useCallback } from 'react';
import Button from '../components/Button';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import SafeInputView from '../components/SafeInputView';
import TextButton from '../components/TextButton';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { AuthRoutes } from '../navigations/routes';
import HR from '../components/HR';
import { StatusBar, ScrollView } from 'react-native';
import { WHITE } from '../colors';



const SignInScreen = () =>{
    const navigation = useNavigation();
    const { top, bottom } = useSafeAreaInsets();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [disabled, setDisabled] = useState(false);

    const passwordRef = useRef();

    useEffect(()=>{
        console.log("SignIn Mount");
        return () => console.log("SignIn UnMount");
    },[]);

    useFocusEffect(
        useCallback(()=>{
            console.log('Focus');
            return() => {
                setEmail('');
                setPassword('');
                setIsLoading(false);
                setDisabled(true);
            };
        },[])
    );

    useEffect(()=>{
        setDisabled(!email || !password);
    },[email,password]);

    const onSubmit = () => {
        Keyboard.dismiss();
        if(!disabled && !isLoading){
            setIsLoading(true);
            console.log(email,password);
            setIsLoading(false);
        }
    };


    return(
        <SafeInputView>
            <StatusBar style="light"/>
            <View style={[styles.container, { paddingTop : top }]}>
                <View style={StyleSheet.absoluteFill}>
                    <Image
                        source={require('../../assets/cover.png')}
                        style={{width:'100%'}}
                        resizeMoe="cover"/>
                </View>
                <ScrollView 
                    style={[
                        styles.form, 
                        {paddingBottom:bottom ? bottom + 10 : 40}
                        ]}
                    contentContainerStyle={{alignItems:'center'}}    
                    bounces={false}
                    keyboardShouldPersistTaps="always"
                    >
                    <Input
                        value={email}
                        onChangeText={(text) => setEmail(text.trim())}
                        inputType={InputTypes.EMAIL}
                        returnKeyType={ReturnKeyTypes.NEXT}
                        onSubmitEditing ={()=> passwordRef.current.focus()}
                        styles={{container : {marginBottom : 20}}}
                        />
                    <Input
                        ref={passwordRef}
                        value={password}
                        onChangeText={(text) => setPassword(text.trim())}
                        inputType={InputTypes.PASSWORD}
                        returnKeyType={ReturnKeyTypes.DONE}
                        onSubmitEditing={onSubmit}
                        styles={{container : {marginBottom : 20}}}
                        />
                    <Button
                        title='로그인'
                        onPress={onSubmit}
                        disabled={disabled}
                        isLoading={isLoading}
                        styles={{container:{marginTop:20}}}
                    />
                    <HR text={'OR'} styles={{ container : { marginVertical :30 } }}/>
                    <TextButton
                        title='회원가입'
                        onPress={()=> navigation.navigate(AuthRoutes.SIGN_UP)}
                    />
                </ScrollView>

                
            </View>
        </SafeInputView>
        
    );
};


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"flex-end",
    },
    form:{
        flexGrow:0,
        backgroundColor:WHITE,
        paddingHorizontal:20,
        paddingTop:40,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
    },
});

export default SignInScreen;



