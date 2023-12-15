import { Pressable,StyleSheet,Text } from "react-native";
import propTypes  from 'prop-types';

const Colors = {
    NUMBER : ['#78716c','#404040'],
    OPERATOR : ['#84cc16','#4d7c0f'],
};

const ButtonTypes = {
    NUMBER : 'NUMBER',
    OPERATOR : "OPERATOR",
};

const Button = ({ title, onPress, buttonStyle, buttonType}) =>{

    return(
        <Pressable
            style={({ pressed }) => [
                styles.button,
                { backgroundColor : Colors[buttonType][0] },
                pressed && { backgroundColor : Colors[buttonType][1] },
                buttonStyle,
            ]}
            onPressOut={onPress}
        >
        
            <Text style={styles.title}>{ title }</Text>
        </Pressable>
    );
};

Button.defaultProps={
    buttonType : ButtonTypes.NUMBER,
};

Button.propTypes  = {
    title : propTypes.string.isRequired,
    onPress : propTypes .func.isRequired,
    buttonStyle : propTypes.object,
    buttonType:propTypes.oneOf(Object.values(ButtonTypes)),
};

const styles = StyleSheet.create({
    button:{

        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        color:'#ffffff',
        fontSize:50,
    },
});

export { ButtonTypes };
export default Button;