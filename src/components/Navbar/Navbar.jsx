import nav from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={nav.nav}>
      <ul className={nav.links}>
        <li className={nav.item__link}><NavLink to="/profile">Profile</NavLink></li>
        <li className={nav.item__link}><NavLink to="/dialogs">Message</NavLink></li>
        <li className={nav.item__link}><NavLink to="/news">News</NavLink></li>
        <li className={nav.item__link}><NavLink to="/music">Music</NavLink></li>
        <li className={nav.item__link}><NavLink to="/settings">Settings</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar;

