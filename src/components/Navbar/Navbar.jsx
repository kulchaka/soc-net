import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import post from "../Profile/MyPosts/Post/Post.module.css";

const Navbar = () => {
  return (
    <>
    <nav className={s.nav}>
      <div className={s.item__link}>
        <NavLink activeClassName={s.active} to="/profile">Profile</NavLink>
      </div>
      <div className={s.item__link}>
        <NavLink activeClassName={s.active} to="/dialogs">Message</NavLink>
      </div>
      <div className={s.item__link}>
        <NavLink activeClassName={s.active} to="/news">News</NavLink>
      </div>
      <div className={s.item__link}>
        <NavLink activeClassName={s.active} to="/music">Music</NavLink>
      </div>
      <div className={s.item__link}>
        <NavLink activeClassName={s.active} to="/settings">Settings</NavLink>
      </div>
      <div className="friends-block">
        <div className={s.friend__logo}>
          <img className={post.post__img}
               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn4IJAoQQ7u15e7dKIkJ9xdaGRboA5Ycj2fg&usqp=CAU"
               alt="avatar"/>
        </div>

      </div>
    </nav>
    </>
  )
}

export default Navbar;

