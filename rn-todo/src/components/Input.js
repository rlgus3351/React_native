import { StyleSheet,Text,TextInput,View } from "react-native";
import propTypes, { object }  from 'prop-types';


export const KeyboardTypes={
    DEFAULT : "default",
    EMAIL : "email-address",
};

export const ReturnKeyTypes={
    DONE : "done",
    NEXT : "next",
};

const Input = ({title, placeholder, keyboardType, returnKeyType,secureTextEntry,...props}) =>{
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <TextInput
                {...props}
                style={styles.input}
                placeholder={placeholder ?? title}
                placeholderTextColor={'#a3a3a3'}
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType={keyboardType}
                returnKeyType={returnKeyType}
                textContentType=""
                secureTextEntry={secureTextEntry}
                keyboardAppearance="light"
            />
        </View>
    );
};

Input.defaultProps={
    keyboardType:KeyboardTypes.DEFAULT,
    returnKeyType:ReturnKeyTypes.DONE,

};

Input.propTypes= {
    title : propTypes.string.isRequired,
    placeholder : propTypes.string,
};

const styles = StyleSheet.create({
    container : {
        width:'100%',
        paddingHorizontal:20,
        marginVertical:10,
    },
    title:{
        marginBottom : 4,
    },
    input:{
        borderWidth:1,
        borderRadius:8,
        paddingHorizontal:10,
        height:42,
    },
});
export default Input;