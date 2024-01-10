import {StatusBar} from 'expo-status-bar';
import {useState} from 'react';
import {UserProvider} from './contexts/UserContext';
import 'react-native-get-random-values'

import Navigation from './navigations/Navigation';

const App = () => {
    const [user, setUser] = useState(null);

    return (
        <UserProvider value={[user, setUser]}>
            <StatusBar style='dark'/>
            <Navigation/>
        </UserProvider>

    )
};

export default App;