import {MaterialCommunityIcons} from '@expo/vector-icons';
import { Pressable } from 'react-native'; 
import propTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';

const HeaderRightbutton = ({tintColor}) =>{
    const navigation = useNavigation();
    return (
        <Pressable hitSlop={10} onPress={()=> navigation.navigate('Settings')}>
            <MaterialCommunityIcons name='cog' size={20} color={tintColor}/>
        </Pressable>
    );
}


HeaderRightbutton.propTypes = {
    tintColor : propTypes.string,
};

export default HeaderRightbutton;