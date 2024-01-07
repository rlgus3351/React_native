import { useState,createContext ,useContext} from "react";
import propTypes from 'prop-types';

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({children}) =>{
    const [user, setUser] = useState(null);
    return(
        <UserContext.Provider value={{ user, setUser}}>
            {children}
        </UserContext.Provider>
    );
}

UserProvider.propTypes = {
    children:propTypes.node,
};

export default UserContext;