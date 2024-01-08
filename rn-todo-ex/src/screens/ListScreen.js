import {ScrollView,StyleSheet, Text, View} from 'react-native';

const ListScreen = () => {
    const todos = [];
    for (let i=1; i<501; i++){
        todos.push({value:i});
    }

    return(
        <View style={Styles.container}>
            <ScrollView>
            {todos.map((item, index) => {
                return(
                    <View
                        key={index}
                        style={{ paddingVertical:10, paddingHorizontal : 20 }}
                    >
                        <Text style={{ fontSize:20 }}>{item.value}</Text>
                    </View>

                );
            })}
            </ScrollView>
        
        </View>
    );
};


const Styles = StyleSheet.create({
    container:{
        flex:1,
        
    },
});

export default ListScreen;