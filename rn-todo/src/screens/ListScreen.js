import {Button, StyleSheet, Text, View} from 'react-native';

const ListScreen = ({navigation, route}) => {
    console.log('rendering ListScrren:', route.params);
    return(
        <View style={Styles.container}>
            <Text style={{fontSize:30}}>List Screen</Text>
            <Button title='push' onPress={() => navigation.push('List')}/>
            <Button title="navigate"
                onPress={() => navigation.navigate('List')}
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