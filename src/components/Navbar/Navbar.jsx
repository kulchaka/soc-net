import nav from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={nav.nav}>
      <ul className={nav.links}>
        <li className={nav.item__link}><a href="/profile">Profile</a></li>
        <li className={nav.item__link}><a href="/dialogs">Message</a></li>
        <li className={nav.item__link}><a href="/news">News</a></li>
        <li className={nav.item__link}><a href="/music">Music</a></li>
        <li className={nav.item__link}><a href="/settings">Settings</a></li>
      </ul>
    </nav>
  )
}

export default Navbar;

