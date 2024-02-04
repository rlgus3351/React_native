import { StyleSheet,Text, View,FlastList} from "react-native";
import {PRIMARY} from '../colors';

const SingInScreen = ()=>{
    return(
      <View style={[styles.conatiner]}>
        <Text style={styles.text}>반복적으로 집중하여 진행하는</Text>
        <Text style={styles.text}>청능재활훈련으로</Text>
        <Text style={[styles.text,{color:PRIMARY.DEFAULT, fontWeight:"bold"}]}>청력을 향상시켜 보세요!</Text>
        <View style={styles.bottomCantaier}>
            <FlastList>
                
            </FlastList>
        </View>
      </View>  
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
        fontWeight:'regular',
        color:'#000',   
    },
    bottomCantaier :{
        width:'100%',
        paddingVertical:22,
        paddingHorizontal:20,
        backgroundColor:'#f2f2f2',
        borderRadius:10,
        borderBlockColor : '#f2f2f2',
        marginTop : 33
    }
});

export default SingInScreen;