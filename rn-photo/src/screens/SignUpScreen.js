import { useNavigation } from '@react-navigation/native';
import {ScrollView,Image, Keyboard, StyleSheet,  View} from 'react-native';
import TextButton from '../components/TextButton';
import Input, {InputTypes, ReturnKeyTypes} from '../components/Input';
import { useEffect, useReducer, useRef,useState } from 'react';
import Button from '../components/Button';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SafeInputView from '../components/SafeInputView';
import HR from '../components/HR';
import { StatusBar } from 'react-native';
import { WHITE } from '../colors';
import { authFormReducer, AuthFormTypes, initAuthForm } from '../reducers/authFormReducer';


const SignUpScreen = () =>{
    const navigation = useNavigation();

    const {top, bottom} = useSafeAreaInsets();
        
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    const [form, dispatch] = useReducer(authFormReducer, initAuthForm);
    const updateForm = (payload) =>{
        const newForm = {...form, ...payload};
        const disabled = 
            !newForm.email || 
            !newForm.password ||
            newForm.password !== newForm.passwordConfirm;
        
        dispatch({
            type:AuthFormTypes.UPDATE_FORM,
            payload : {disabled, ...payload},
        });
    };

    const onSubmit = () =>{
        Keyboard.dismiss();
        if(!form.disabled && !form.isLoading){
            dispatch({type: AuthFormTypes.TOGGLE_LOADING});
            console.log(form.email, form.password);
            dispatch({type:AuthFormTypes.TOGGLE_LOADING});
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
                        value={form.email}
                        onChangeText={(text) => updateForm({email: text.trim()})}
                        inputType={InputTypes.EMAIL}
                        returnKeyType={ReturnKeyTypes.NEXT}
                        onSubmitEditing ={()=> passwordRef.current.focus()}
                        styles={{container : {marginBottom : 20}}}
                        />
                    <Input
                        ref={passwordRef}
                        value={form.password}
                        onChangeText={(text) => updateForm({password : text.trim()})}
                        inputType={InputTypes.PASSWORD}
                        returnKeyType={ReturnKeyTypes.NEXT}
                        onSubmitEditing ={()=> passwordConfirmRef.current.focus()}
                        styles={{container : {marginBottom : 20}}}
                        />
                    <Input
                        ref={passwordConfirmRef}
                        value={form.passwordConfirm}
                        onChangeText={(text) => updateForm({passwordCOnfirm:text.trim()})}
                        inputType={InputTypes.PASSWORD_CONFIRM}
                        returnKeyType={ReturnKeyTypes.DONE}
                        onSubmitEditing={onSubmit}
                        styles={{container : {marginBottom : 20}}}
                        />
                    <Button
                        title='회원가입'
                        onPress={onSubmit}
                        disabled={form.disabled}
                        isLoading={form.isLoading}
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