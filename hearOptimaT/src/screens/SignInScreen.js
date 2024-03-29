import { StyleSheet,Text, View, FlatList, StatusBar,Platform} from "react-native";
import {PRIMARY} from '../colors';
import Button from "../components/Button";
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import SafeInputView from "../components/SafeInputView";
import { useNavigation } from "@react-navigation/native";
import { AuthRoutes } from "../navigations/routes";

const SingInScreen = () => {
    const insets = useSafeAreaInsets();
    console.log(insets);
    const navigation = useNavigation();
    const DATA = [
        {
            id: '1',
            title: '⦁ 총 10회차의 훈련 과정',
          },
          {
            id: '2',
            title: '⦁ 초급, 중급, 도전 과정 구성',
          },
          {
            id: '3',
            title: '⦁ 일음절어 / 이음절어 훈련 방식',
          },
          {
            id: '4',
            title: '⦁ 청능 전문가들과 함께 개발한 도전과제',
          },
          {
            id: '5',
            title: '⦁ 문제 별 직접 채점 가능',
          },
    ];

    const Item = ({title}) => (
        <View style={styles.item}>
          <Text style={styles.title}>{title}</Text>
        </View>
      );

    return(
        <SafeInputView>
                <StatusBar style="light"/>
                <View style={[styles.conatiner]}>
                    <Text style={[styles.text,{paddingTop:30}]}>반복적으로 집중하여 진행하는</Text>
                    <Text style={styles.text}>청능재활훈련으로</Text>
                    <View style={styles.textHighLight}>
                        <Text style={[styles.text,{color:PRIMARY.DEFAULT, fontWeight:"bold"}]}>청력을 향상시켜 보세요!</Text>
                    </View>
                    <View style={styles.middleCantainer}>
                        <FlatList
                            data={DATA}
                            renderItem={({item}) => <Item title={item.title} />}
                            keyExtractor={item => item.id}
                        />
                    </View>
                    <View style={styles.bottomCantainer}>
                        <Button title="로그인" onPress={()=> navigation.navigate(AuthRoutes.SIGN_UP)}/>
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
        fontWeight:'700',
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
        marginTop:30
    },
    title:{
        fontSize:16,
        fontWeight:'700',
        paddingVertical:22,
        paddingHorizontal:20,
        textAlign:'auto',

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