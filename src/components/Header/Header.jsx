import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
  console.log(props)
  return (
    <header className={s.header}>
      <div className={s.header__block}>
        <NavLink to='/'>
          <div className={s.header__img}></div>
        </NavLink>
        {
          props.isAuth ? <div>{props.login}</div> :
            <div className={s.header__login}>
              <NavLink to='/login'>Login</NavLink>
            </div>
        }

      </div>
    </header>
  )
}

export default Header;
