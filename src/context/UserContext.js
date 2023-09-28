import { createContext, useState } from "react";
import Cookies from 'js-cookie';
import { api } from '../utils/apiHelper';

const UserContext = createContext(null);

export const UserProvider = ({children}) => {
  const cookie = Cookies.get('authenticatedUser')
  const [authUser, setAuthUser] = useState(cookie ? JSON.parse(cookie) : null);

  const signIn = async (credentials) => {
    const res = await api('/users', 'GET', null, credentials);
    if (res.status === 200) {
      const data = await res.json();
      setAuthUser(data);
      Cookies.set('authenticatedUser', JSON.stringify(data), { expires: 1 });
      return data;
   } else if (res.status === 401) {
      return null;
   } else {
     throw new Error();
   }
  }

  const signOut = () => {
    setAuthUser(null);
    Cookies.remove('authenticatedUser');
  }

  return (
    <UserContext.Provider value={{
      authUser,
      actions: {
        signIn,
        signOut
      }
    }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;