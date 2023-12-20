import { StyleSheet,Text, View, Image } from "react-native";
import Input,{KeyboardTypes, ReturnKeyTypes} from "../components/Input";
const SingInScreen = ()=>{
    return(
      <View style={styles.conatiner}>
        <Image
            source={require('../../assets/main.png')}
            style={styles.image}
        />
        <Input title={'이메일'}
        placeholder ="your@eamil.com"
        keyboardType={KeyboardTypes.EMAIL}
        returnKeyType={ReturnKeyTypes.NEXT}/>
        <Input title={'비밀번호'} returnKeyType={ReturnKeyTypes.DONE} secureTextEntry/>
      </View>  
    );
};

const styles = StyleSheet.create({
    conatiner:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    image:{
      width:200,  
      height:200,
    },
});

export default SingInScreen;