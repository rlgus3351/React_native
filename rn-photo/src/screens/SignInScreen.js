import {useNavigation} from "@react-navigation/native";
import {Keyboard, StyleSheet, View, Image} from 'react-native';
import {AuthRoutes} from "../navigations/routes";
import Input, {InputTypes, ReturnKeyTypes} from "../components/Input";
import {useState, useRef} from "react";
import Button from '../components/Button';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import SafeInputView from "../components/SafeInputView";
import TextButton from "../components/TextButton";
import HR from "../components/HR";
import {StatusBar} from "react-native";
import {WHITE} from "../colors";

const SignInScreen = () => {
    const navigation = useNavigation();
    const {top, bottom} = useSafeAreaInsets();

    const passwordRef = useRef();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoaing] = useState(false);
    const [disabled, setDisabled] = useState(false);

    useRef(() => {
        setDisabled(!email || password);
    }, [email, password]);

    const onSubmit = () => {
        Keyboard.dismiss();
        if (!disabled && !isLoading) {
            setIsLoaing(true);
            console.log(email, password);
            setIsLoaing(false);
        }
    };

    return (
        <SafeInputView>
            <StatusBar style="light"/>
            <View
                style={[
                    styles.container, {
                        paddingTop: top
                    }
                ]}>
                <View style={StyleSheet.absoluteFill}>
                    <Image /*eslint no-undef: "error"*/
                        source={require('../../assets/cover.png')} style={{
                            width: '100%'
                        }} resizeMode="cover"/>
                </View>
                <View
                    style={[
                        styles.form, 
                            {paddingBottom: bottom ? bottom + 10 : 40},
                    ]}
                    >
                    <Input
                        styles={{
                            container: {
                                marginBottom: 20
                            }
                        }}
                        inputType={InputTypes.EMAIL}
                        ReturnKeyTypes={ReturnKeyTypes.NEXT}
                        value={email}
                        onSubmitEditing={()=> passwordRef.current.focus()}
                        onChangeText = {(text) => setEmail(text.trim())}/>

                    <Input
                        ref={passwordRef}
                        styles={{
                            container: {
                                marginBottom: 20
                            }
                        }}
                        inputType={InputTypes.PASSWORD}
                        ReturnKeyTypes={ReturnKeyTypes.DONE}
                        value={password}
                        onSubmitEditing={onSubmit}
                        onChangeText={(text) => setPassword(text.trim())}/>
                    <Button
                        title="로그인"
                        onPress={() => navigation.navigate(AuthRoutes.SIGN_UP)}
                        styles={{
                            container: {
                                marginTop: 20
                            }
                        }}/>
                    <HR
                        text={'OR'}
                        styles={{
                            container: {
                                marginVertical: 30
                            }
                        }}/>
                    <TextButton
                        title={'회원가입'}
                        onPress={() => navigation.navigate(AuthRoutes.SIGN_UP)}/>
                </View>

            </View>
        </SafeInputView>

    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    
    },
    form:{
        alignItems:'center',
        backgroundColor:WHITE,
        paddingHorizontal:20,
        paddingTop:40,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
    },
});

export default SignInScreen;