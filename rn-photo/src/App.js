import { StatusBar,View} from 'expo-status-bar';
import Navigation from './navigations/Navigation';

const App = () => {
  return (
    <View>
        <StatusBar style='dark'>
            <Navigation />
        </StatusBar>
    </View>
  );
};

export default App;

