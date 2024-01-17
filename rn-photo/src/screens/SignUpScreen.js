import { useNavigation } from '@react-navigation/native';
import {ScrollView,Image, Keyboard, StyleSheet,  View} from 'react-native';
import TextButton from '../components/TextButton';
import Input, {InputTypes, ReturnKeyTypes} from '../components/Input';
import { useEffect, useRef,useState } from 'react';
import Button from '../components/Button';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SafeInputView from '../components/SafeInputView';
import HR from '../components/HR';
import { StatusBar } from 'react-native';
import { WHITE } from '../colors';


const SignUpScreen = () =>{
    const navigation = useNavigation();

    const {top, bottom} = useSafeAreaInsets();
        
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const [isLoading, setIsLoading] =useState(false);
    const [disabled, setDisabled] = useState(true);




    useEffect(() =>{
        setDisabled(!email || !password || password !== passwordConfirm);
    },[email,password,passwordConfirm]);

    const onSubmit = () =>{
        Keyboard.dismiss();
        if (!disabled && !isLoading){
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
                    bounces={false}
                    style={[styles.form, {paddingBottom: bottom ? bottom + 10 : 40}]}
                    contentContainerStyle={{ alignItems:'center'}}
                    keyboardPersistTaps="always"
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
                        returnKeyType={ReturnKeyTypes.NEXT}
                        onSubmitEditing ={()=> passwordConfirmRef.current.focus()}
                        styles={{container : {marginBottom : 20}}}
                        />
                    <Input
                        ref={passwordConfirmRef}
                        value={passwordConfirm}
                        onChangeText={(text) => setPasswordConfirm(text.trim())}
                        inputType={InputTypes.PASSWORD_CONFIRM}
                        returnKeyType={ReturnKeyTypes.DONE}
                        onSubmitEditing={onSubmit}
                        styles={{container : {marginBottom : 20}}}
                        />
                    <Button
                        title='회원가입'
                        onPress={onSubmit}
                        disabled={disabled}
                        isLoading={isLoading}
                        styles={{container:{marginTop:20}}}
                    />
                    <HR text={'OR'} styles={{ container : { marginVertical :30 } }}/>
                    <TextButton
                        title='로그인'
                        onPress={navigation.goBack}
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
export default SignUpScreen; 