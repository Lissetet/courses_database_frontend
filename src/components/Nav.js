import { useContext } from 'react';
import { Link } from "react-router-dom";
import UserContext from '../context/UserContext';

const Nav = () => {
  const { authUser } = useContext(UserContext);
  const name = authUser ? `${authUser.firstName} ${authUser.lastName}` : null;

  return (
    <nav>
      { !authUser ? (
        <ul className="header--signedout">
          <li><Link to="/signup">Sign Up</Link></li>
          <li><Link to="/signin">Sign In</Link></li>
        </ul>
      ) : (
        <ul className="header--signedin">
          <li><span>Welcome, {name}!</span></li>
          <li><Link to="/signout">Sign Out</Link></li>
        </ul>
      )}
    </nav>
  );
}

export default Nav;