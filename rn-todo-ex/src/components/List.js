import {FlatList, StyleSheet, View} from "react-native";
import {GRAY} from "../color";
import ListItem from "./ListItem";

const Separator = () => {
    return <View style={styles.separator}></View>;
};

const List = ({data}) => {
    return (
        <FlatList
            data={data}
            keyExtractor={(item)=>item.id.toString()}
            renderItem={({item}) => <ListItem item={item}/>}
            windowSize={2}
            ItemSeparatorComponent={Separator}
            ListHeaderComponent={View}
            ListHeaderComponentStyle={{height:10}}
            onScroll={({nativeEvent})=> console.log(nativeEvent)}
        />
    );
};

const styles = StyleSheet.create({
    separator: {
        height: 1,
        backgroundColor: GRAY.LIGHT,
        marginVertical: 10,
        marginHorizontal: 10
    }
});

export default List;
