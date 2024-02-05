import { StyleSheet,Text, View, StatusBar,Keyboard, Alert} from "react-native";
import {PRIMARY} from '../colors';
import Button from "../components/Button";
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import SafeInputView from "../components/SafeInputView";
import Input,{InputTypes,ReturnKeyTypes}from "../components/Input";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AuthRoutes } from "../navigations/routes";
import { useUserContext } from '../contexts/UserContext';
import { singIn } from "../api/auth";


const SingInScreen = () => {
    const navigation = useNavigation();
    
    const[number, setnumber] = useState(0);
    const[birth, setBirth] = useState(0);
    const brithRef = useRef();
    const { setUser } = useUserContext();

    const onSubmit = async () => {
        try {
            Keyboard.dismiss();
            const data = await singIn(Text.trim(number), Text.trim(birth));
            setUser(data);
          } catch (error) {
            Alert.alert('로그인 실패', error, []);
          }
        Keyboard.dismiss();   
    };
    return(
        <SafeInputView>
            
                <StatusBar style="light"/>
                <View style={[styles.conatiner,{paddingTop:30}]}>
                    <Text style={[styles.text,{color:PRIMARY.DEFAULT, fontWeight:"bold"}]}>HearOptima T에 </Text>
                    <Text style={[styles.text,{color:PRIMARY.DEFAULT, fontWeight:"bold", paddingBottom:50}]}>오신 것을 환영합니다</Text>
                    <Input 
                        placeholder="휴대폰 번호를 입력해주세요."
                        title="휴대폰 번호"
                        value={number}
                        onChangeText={(number) => setnumber(number)}
                        ReturnKeyTypes={ReturnKeyTypes.NEXT}
                        iconName='cellphone'
                        styles={{container : {marginBottom : 20}}}
                        onSubmitEditing={() => brithRef.current.focus()}
                        />
                    <Input 
                        placeholder="생년월일을 입력해주세요."
                        title="휴대폰 번호"
                        value={birth}
                        ref={brithRef}
                        onChangeText={(password) => setBirth(password.trim())}
                        ReturnKeyTypes={ReturnKeyTypes.DONE}
                        iconName='calendar-today'
                        styles={{container : {marginBottom : 20}}}
                        onSubmitEditing={onSubmit}
                        />
                    <View style={styles.bottomCantainer}>
                        <Button title="로그인" onPress={{onSubmit}}/>
                    </View>
                </View>
        </SafeInputView>
       
    ); 
};

const styles = StyleSheet.create({
    conatiner:{
        flex:1,
        paddingHorizontal:20,
        justifyContent:'center',
        alignItems:'flex-start',
    },
    text:{
        fontSize:20,
        textAlign:'left',
        fontWeight:'bold',
        color:'#000',   
    },
    bottomCantainer :{
        width:'100%',
        marginTop:30
    },
});

export default SingInScreen;