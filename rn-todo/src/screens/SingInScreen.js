import { 
  StyleSheet, 
  View, 
  Image ,
  KeyboardAvoidingView,
  Pressable,
  Keyboard,
  Platform,

  Alert} 
  from "react-native";


import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { useContext, useEffect,useState, useRef } from "react";

import { singIn } from "../api/auth";
import Input,{IconNames, KeyboardTypes, ReturnKeyTypes} from "../components/Input";
import SafeInputView from "../components/SafeInputView";
import Button from "../components/Button";
import propTypes from 'prop-types';
import { useUserContext } from "../contexts/UserContext";


const SingInScreen = () => {
    
    const insets = useSafeAreaInsets();
    
    const { setUser } = useUserContext();
  
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const passwordRef = useRef(null);
    const [disabled, setDisabled] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
      setDisabled(!email || !password);
    },[email,password]);



    const onSubmit = async (setUser) =>{
      if(!isLoading && !disabled){
        try{
          setIsLoading(true);
          Keyboard.dismiss();
          const data = await singIn(email,password);
          setIsLoading(false);
          setUser(data);
        }catch(error){
          Alert.alert('로그인 실패',error,[{
            text:'확인', onPress: ()=>{setIsLoading(false)},
          }]);
        }
      }
    };
    return(
      <UserContext.Consumer>
        {({setUser}) => {

          return(
            <SafeInputView>
              <SafeAreaView style={styles.conatiner}>
                  
                  <Image
                      source={require('../../assets/main.png')}
                      style={styles.image}
                  />
                  <Input title={'이메일'}
                    placeholder ="your@email.com"
                    keyboardType={KeyboardTypes.EMAIL}
                    returnKeyType={ReturnKeyTypes.NEXT}
                    value = {email}
                    iconName={IconNames.EMAIL}
                    onChangeText ={(email) => setEmail(email.trim())}
                    onSubmitEditing={ () => passwordRef.current.focus()}
                    />
                  <Input title={'비밀번호'} 
                    ref = {passwordRef}
                    returnKeyType={ReturnKeyTypes.DONE} 
                    value = {password}
                    iconName={IconNames.PASSWORD}
                    onChangeText ={(password) => setPassword(password.trim())}
                    onSubmitEditing ={onSubmit}
                    secureTextEntry/>
                    <View style = {styles.buttonContainer}>
                      <Button title = "로그인" onPress={onSubmit} disabled={disabled} isLoading={isLoading}></Button>
                    </View>
              
              </SafeAreaView>
            </SafeInputView>
          );
        }}
      </UserContext.Consumer>
    );

};


SingInScreen.prototype = {
  navigation : propTypes.object,
}
const styles = StyleSheet.create({
    conatiner:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    buttonContainer:{
      width:'100%',
      marginTop:30,
      paddingHorizontal:20,
    },  
    image:{
      width:200,  
      height:200,
    },
});


export default SingInScreen;
