import { StyleSheet,Pressable, Text } from "react-native";
import propTypes from 'prop-types';
import {PRIMARY,WHITE } from "../colors";


const Button = ({title, onPress}) =>{
    return(
        <Pressable
            onPress={onPress}
            style={({pressed}) =>[
                styles.container,
                pressed && {backgroundColor : PRIMARY.DARK},
                // disabled && {backgroundColor : PRIMARY.LIGHT, opacity:0.6},
            ]}
            >
            <Text style={styles.title}>{title}</Text>
            
        </Pressable>
    );
};

Button.propTypes = {
    title:propTypes.string.isrequired,
    onPress : propTypes.func.isrequired,
};

const styles = StyleSheet.create({
    container:{
        borderRadius:8,
        paddingVertical:20,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor : PRIMARY.DEFAULT,
    },
    title :{
        color:WHITE,
        fontSize:16,
        fontWeight:'700',
        lineHeight:20,
    },
});


export default Button;