
import {Link, NavLink} from "react-router-dom"

const Nav = () => {
  return (
    <nav>
      <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <NavLink to="/instructors">Instructors</NavLink>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
    </nav>
    
  );
};

export default Nav;