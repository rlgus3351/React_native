import {Button, StyleSheet, Text, View} from 'react-native';

const ListScreen = ({navigation}) => {

    return(
        <View style={Styles.container}>
            <Text style={{fontSize:30}}>List Screen</Text>
            <Button title='push' onPress={() => navigation.push('list')}/>
            <Button title="navigate"
                onPress={()=> navigation.navigate('list')}
            />
        </View>
    );
};


const Styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems : 'center',
    },
});

export default ListScreen;