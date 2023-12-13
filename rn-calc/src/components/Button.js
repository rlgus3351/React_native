import { Text ,TouchableOpacity} from "react-native";
import propTypes from "prop-types";
const Button = ({title}) => {
    return (
        <TouchableOpacity style={{backgroundColor:'red',padding:20}}>
            <Text style={{color:'white'}}>{title}</Text>
        </TouchableOpacity>
    )
};

Button.propTypes = {
    title:propTypes.string.isRequired,
};


Button.defaultProps={
    title:'button title'
}
export default Button;

