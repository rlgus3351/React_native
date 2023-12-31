import {Button, StyleSheet, Text, View} from 'react-native';

const ListScreen = ({navigation, route}) => {
    console.log('rendering ListScrren:', route.params);
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