import { 
  StyleSheet, 
  View, 
  Image ,
  KeyboardAvoidingView,
  Pressable,
  Keyboard,
  Platform } 
  from "react-native";
import {useEffect,useState, useRef} from "react";
import Input,{IconNames, KeyboardTypes, ReturnKeyTypes} from "../components/Input";
import SafeInputView from "../components/SafeInputView";
import Button from "../components/Button";

const SingInScreen = ()=>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const passwordRef = useRef(null);
    const [disabled, setDisabled] = useState(true);

    useEffect(()=>{
      setDisabled(!email || !password);
    },[email,password]);



    const onSubmit = () =>{
      Keyboard.dismiss();
      console.log(email, password);
    }

    return(
      <SafeInputView>
          <View style={styles.conatiner}>
    
            <Image
                source={require('../../assets/main.png')}
                style={styles.image}
            />
            <Input title={'이메일'}
              placeholder ="your@eamil.com"
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
              secureTextEntry/>
              <View style = {styles.buttonContainer}>
                <Button title = "로그인" onPress={onSubmit} disabled={disabled}></Button>
              </View>
          </View>
      </SafeInputView>
    );
};

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
const getnameAsync = (error) =>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(error){
        reject('error');
      }else{
        resolve('[async]Beomjun');
      }
    },1000);
  });
}

getnameAsync(true).then((name) =>{
  console.log(name);
})
.catch((error)=>{
  console.log(error);
})

export default SingInScreen;