import { StyleSheet,Text,TextInput,View } from "react-native";
import propTypes, { object }  from 'prop-types';
import {GRAY, PRIMARY, BLACK} from '../colors'
import { useState, forwardRef } from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Button from "../components/Button";

export const KeyboardTypes={
    DEFAULT : "default",
    NUMBER : "numeric",
};

export const ReturnKeyTypes={
    DONE : "done",
    NEXT : "next",
};

export const IconNames = {
    NUMBER : 'email',
    BIRTH : 'calendar-today',
}

const Input = forwardRef(({ placeholder, value,iconName, keyboardType, returnKeyType,secureTextEntry,...props},ref) =>{
    const [isFocused, setIsFocused] = useState(false);
    return(
        <View style={styles.container}>
            <View>
                <TextInput
                    {...props}
                    value={value}
                    ref={ref}
                    style={[
                        styles.input,
                        value && styles.hasValueInput,
                        isFocused && styles.focusedInput]}
                    placeholder={placeholder}
                    placeholderTextColor={GRAY.DEFAULT}
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType={keyboardType}
                    returnKeyType={returnKeyType}
                    textContentType="none"
                    onFocus={()=>setIsFocused(true)}
                    onBlur={()=>setIsFocused(false)}
                    secureTextEntry={secureTextEntry}
                    keyboardAppearance="light"
                />
                <View style ={styles.icon}>
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
            <View style={styles.bottomCantainer}>
                <Button title="로그인" onPress={()=> navigation.navigate(AuthRoutes.SIGN_UP)}/>
            </View>
        </View>
    );
});

Input.displayName = 'Input';
Input.defaultProps={
    keyboardType:KeyboardTypes.DEFAULT,
    returnKeyType:ReturnKeyTypes.DONE,
};

Input.propTypes= {
    title : propTypes.string.isRequired,
    placeholder : propTypes.string,
    value:propTypes.string,
    iconName : propTypes.oneOf(Object.values(IconNames)),
};

const styles = StyleSheet.create({
    container : {
        width:'100%',
        marginVertical:10,
    },
    
    title:{
        marginBottom : 4,
        color:GRAY.DEFAULT,
    },
    hasValueTitle:{
        color:BLACK,
    },
    focusedTitle:{
        fontWeight:'600',
        color : PRIMARY.DEFAULT,
    },
    icon:{
        position:'absolute',
        left:8,
        height:'100%',
        justifyContent:'center',
    },
    input:{
        paddingLeft:30,
        borderBottomWidth:1,
        height:42,
        borderColor:GRAY.DEFAULT,
    },
    hasValueInput:{
        borderColor:BLACK,
        color:BLACK,
    },
    focusedInput:{
        borderBottomWidth : 2,
        borderColor:PRIMARY.DEFAULT,
        color : PRIMARY.DEFAULT
    },
    
});
export default Input; 