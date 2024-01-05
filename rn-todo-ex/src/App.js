import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import SignInScreen from './screens/SignInScreen';
import { WHITE } from './color';

const App = () => {
    return(
        <View style={styles.container}>
            <StatusBar style='dark'/>
            <SignInScreen/>
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:WHITE,
    },
});

export default App;