import { StyleSheet, Text, TextInput, View } from "react-native";
import propTypes from 'prop-types';
import { GRAY,PRIMARY,BLACK} from "../color";
import { forwardRef, useState } from "react";
import {MaterialCommunityIcons} from '@expo/vector-icons';


export const KeyboardTypes = {
    DEFAULT: 'default',
    EMAIL : 'email-address',
}

export const ReturnKeyTypes = {
    DONE : 'done',
    NEXT : 'next',
}

export const IconNames = {
    EMAIL : 'email',
    PASSWORD:'lock',
};

const Input = forwardRef(
    ({ title, placeholder,value, iconName, ...props }, ref ) =>{
        const [isFocused, setIsFocused] = useState(false);
    
    
        return(
            <View style={styles.container}>
                <Text style={[styles.title,
                        value && styles.hasValueTitle,
                        isFocused && styles.focusedTitle]}>{title}</Text>
                <View>
                    <TextInput
                        {...props}
                        ref = {ref}
                        style={[
                            styles.Input,
                            value && styles.hasValueTitle,
                            isFocused && styles.focusedInput]} 
                        value={value}
                        placeholder={placeholder ?? title}
                        placeholderTextColor={GRAY.DEFAULT}
                        autoCapitalize="none"
                        autoCorrect={false}
                        textContentType="none"    
                        keyboardAppearance="light"
                        onFocus={()=> setIsFocused(true)}
                        onBlur={()=> setIsFocused(false)}
                        />
                    <View style={styles.icon}>
                    <MaterialCommunityIcons
                            name={iconName} 
                            size={20} 
                            color={(()=>{
                                switch(true){
                                    case isFocused:
                                        return PRIMARY.DEFAULT;
                                    case !!value:
                                        return BLACK;
                                    default:
                                        return GRAY.DEFAULT;
                                }
                            })()}/>
                    </View>
                </View>
    
            </View>
        );
    }
);

Input.defaultProps = {
    keyboardType : KeyboardTypes.DEFAULT,
    returnKeyType : ReturnKeyTypes.DONE,
}


Input.proptypes = {
    title : propTypes.string.isRequired,
    placeholder : propTypes.string,
    keyboardType : propTypes.oneOf(Object.values(KeyboardTypes)),
    returnKeyType : propTypes.oneOf(Object.values(ReturnKeyTypes)),
    secureTextEntry : propTypes.bool,
    iconName : propTypes.oneOf(Object.values(IconNames)),
}   


Input.displayName = 'Input';
const styles = StyleSheet.create({
    container : {
        width:'100%',
        paddingHorizontal : 20,
        marginVertical:10,

    },
    //----------------------------------------------------title----------------------------------------------------//
    title:{
        marginBottom:4,
        color:GRAY.DEFAULT,
    },
    focusedTitle:{
        fontWeight:'600',
        color:PRIMARY.DEFAULT,
    },
    hasValueTitle:{
        color:BLACK,
    },
    //----------------------------------------------------Input----------------------------------------------------//
    Input:{
        borderWidth:1,
        borderRadius:8,
        paddingHorizontal:10,
        height:42,
        paddingLeft:30,
        borderCo:GRAY.DEFAULT,
    },
    hasValueInput:{
        borderColor:BLACK,
        color:BLACK,
    },
    focusedInput:{
        borderWidth:2,
        borderColor:PRIMARY.DEFAULT,
        color:PRIMARY.DEFAULT,
    },
    icon:{
        position : 'absolute',
        left : 8,
        height:'100%',
        justifyContent:'center',
    }
});
export default Input;