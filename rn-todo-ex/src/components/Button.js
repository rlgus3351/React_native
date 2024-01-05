import { Pressable, StyleSheet,Text } from "react-native";
import propTypes from "prop-types";
import { PRIMARY, WHITE } from "../color";

const Button = ({title, onPress}) =>{
    return(
        <Pressable
            onPress={onPress}
            style= {({pressed}) => [
                styles.container,
                pressed && { backgroundColor : PRIMARY.DEFAULT},
            ]}
            disabled={true}
        >
            <Text style = {styles.title}>{title}</Text>
        </Pressable>
    );
};

Button.protoTypes= {
    title : propTypes.string.isRequired,
    onPress : propTypes.func.isRequired,
}

const styles = StyleSheet.create({
    container : {
        borderRadius:8,
        paddingVertical : 20,
        justifyContent :'center',
        alignItems:'center',
        backgroundColor : PRIMARY.DEFAULT,
    },
    title:{
        color:WHITE,
        fontSize:16,
        fontWeight:'700',
    },
});

export default Button;