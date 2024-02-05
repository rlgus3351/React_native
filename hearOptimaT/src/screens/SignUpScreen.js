import { StyleSheet,Text, View, StatusBar} from "react-native";
import {PRIMARY} from '../colors';
import Button from "../components/Button";
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import SafeInputView from "../components/SafeInputView";


const SingInScreen = () => {
    // const { top} = useSafeAreaInsets();
    const insets = useSafeAreaInsets();
    console.log(insets);

    return(
        <SafeInputView>
            <SafeAreaView>
                <StatusBar style="light"/>
                <View style={[styles.conatiner]}>
                    <Text style={[styles.text ,{paddingTop:140}]}>반복적으로 집중하여 진행하는</Text>
                    <Text style={styles.text}>청능재활훈련으로</Text>
                    <View style={styles.textHighLight}>
                        <Text style={[styles.text,{color:PRIMARY.DEFAULT, fontWeight:"bold"}]}>청력을 향상시켜 보세요!</Text>
                    </View>
                    <View style={styles.middleCantainer}>

                    </View>
                    <View style={styles.bottomCantainer}>
                        <Button title="로그인" onPress={()=> console.log("test")}/>
                    </View>
                </View>  
            </SafeAreaView>
            
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
    middleCantainer :{
        width:'100%',
        paddingVertical:22,
        paddingHorizontal:20,
        backgroundColor:'#f2f2f2',
        borderRadius:10,
        borderBlockColor : '#f2f2f2',
        marginTop : 33
    },
    bottomCantainer :{
        width:'100%',
        marginTop : 100
    },
    title:{
        fontSize:20,
        fontFamily:'bold',
        paddingVertical:22,
        paddingHorizontal:20,

    },
    textHighLight:{
        // textDecorationLine:'underline',
        // textDecorationColor:'#000000',
        borderBottomColor:PRIMARY.DEFAULT,
        borderBottomWidth:2,
        alignSelf:'flex-start',
    }
});

export default SingInScreen;