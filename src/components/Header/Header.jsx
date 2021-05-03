import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {
  return (
    <header className={s.header}>
      <NavLink to='/'>
      <div className={s.header__img}></div>
      </NavLink>
    </header>
  )
}

export default Header;
