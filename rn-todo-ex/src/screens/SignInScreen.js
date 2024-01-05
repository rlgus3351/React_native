import {Image, StyleSheet, View, Keyboard, Alert} from "react-native";
import Input, {IconNames, KeyboardTypes, ReturnKeyTypes} from "../components/Input";
import SafeInputView from "../components/SafeInputView";
import {useState, useRef, useEffect} from "react";
import Button from "../components/Button";
import {singIn} from "../api/auth";
import propTypes from 'prop-types';

const SignInScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const passwordRef = useRef(null);
    const [disabled, setDisabled] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setDisabled(!email || !password);
    }, [email, password]);

    const onSubmit = async () => {
        if (!isLoading && !disabled) {
            try {
                setIsLoading(true);
                Keyboard.dismiss();
                const data = await singIn(email, password);
                console.log(data);
                setIsLoading(false);
                navigation.navigate('List');
            } catch (error) {
                Alert.alert('로그인 실패', error, [
                    { text : '확인', onPress: () => setIsLoading(false)},
                ]);
            }
        }

    };

    return (
        <SafeInputView>
            <View style={styles.container}>
                <Image source={require('../../assets/main.png')} style={styles.image}/>
                <Input
                    title={'이메일'}
                    placeholder={"your@email.com"}
                    KeyboardType={KeyboardTypes.EMAIL}
                    returnKeyType={ReturnKeyTypes.NEXT}
                    value={email}
                    onChangeText={(email) => setEmail(email.trim())}
                    iconName={IconNames.EMAIL}
                    onSubmitEditing={()=>passwordRef.current.focus()}/>
                <Input
                    title={'비밀번호'}
                    ref={passwordRef}
                    secureTextEntry
                    returnKeyType={ReturnKeyTypes.DONE}
                    value={password}
                    onChangeText={(password) => setPassword(password.trim())}
                    iconName={IconNames.PASSWORD}
                    onSubmitEditing={onSubmit}/>
                <View style={styles.buttonContainer}>
                    <Button
                        title="로그인"
                        onPress={onSubmit}
                        disabled={disabled}
                        isLoading={isLoading}/>
                </View>
            </View>
        </SafeInputView>
    );
};

SignInScreen.propTypes = {
    navigation : propTypes.object,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 200,
        height: 200
    },
    buttonContainer: {
        width: '100%',
        marginTop: 30,
        paddingHorizontal: 20
    }
});
export default SignInScreen;