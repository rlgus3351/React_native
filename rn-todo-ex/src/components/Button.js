import { ActivityIndicator,Pressable, StyleSheet,Text } from "react-native";
import propTypes from "prop-types";
import { DANGER,GRAY, PRIMARY, WHITE } from "../color";


export const ButtonTypes = {
    PRIMARY : 'PRIMARY',
    DANGER : 'DANGER',
};

const Button = ({title, onPress, disabled, isLoading, buttonType}) =>{
    const colors = { PRIMARY, DANGER};
    return(
        <Pressable
            onPress={onPress}
            style= {({ pressed }) => [
                styles.container,
                { backgroundColor : colors[buttonType].DEFAULT},
                pressed && { backgroundColor : colors[buttonType].DARK},
                disabled && {
                    backgroundColor : colors[buttonType].LIGHT,
                    opactity: 0.6,
                },
            ]}
            disabled = {disabled}
        >
            {isLoading ? ( 
                <ActivityIndicator size="small" color={GRAY.DEFAULT}/>
            ) : (
                <Text style = {styles.title}>{title}</Text>
            )}
        </Pressable>
    );
};

Button.defaultProps = {
    buttonType: ButtonTypes.PRIMARY,
};

Button.protoTypes= {
    title : propTypes.string.isRequired,
    onPress : propTypes.func.isRequired,
    disabled:propTypes.bool,
    isLoading:propTypes.bool,
    buttonType : propTypes.oneOf(Object.values(ButtonTypes)),
};

const styles = StyleSheet.create({
    container : {
        borderRadius:8,
        paddingVertical : 20,
        justifyContent :'center',
        alignItems:'center',
    },
    title:{
        color:WHITE,
        fontSize:16,
        fontWeight:'700',
        lineHeight:20,
    },
});

export default Button;