import {StyleSheet, Text, View} from 'react-native';

const ListScreen = () => {

    return(
        <View style={Styles.container}>
            <Text style={{fontSize:30}}>List Screen</Text>
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