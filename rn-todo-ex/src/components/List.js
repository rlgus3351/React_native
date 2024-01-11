import {FlatList, StyleSheet, View} from "react-native";
import {GRAY} from "../color";
import ListItem from "./ListItem";
import propTypes from 'prop-types';

const Separator = () => {
    return <View style={styles.separator}></View>;
};

const List = ({data, setIsBottom}) => {
    return (
        <FlatList
            data={data}
            keyExtractor={(item)=>item.id.toString()}
            renderItem={({item}) => <ListItem item={item}/>}
            windowSize={2}
            ItemSeparatorComponent={Separator}
            ListHeaderComponent={View}
            ListHeaderComponentStyle={{height:10}}
            onScroll={({
                nativeEvent : {contentOffset,layoutMeasurement, contentSize},
            }) => {
                const distance = contentSize.height - (contentOffset.y + layoutMeasurement.height);
                setIsBottom(!(distance>20 || contentOffset.y === 0));
            }}
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

List.propTypes = {
    data:propTypes.array.isRequired,
    setIsBottom:propTypes.func.isRequired,
};

export default List;
