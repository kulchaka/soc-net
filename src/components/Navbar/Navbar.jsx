import nav from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={nav.nav}>
      <ul className={nav.links}>
        <li className={nav.item__link}><a href="/profile">Profile</a></li>
        <li className={nav.item__link}><a href="/dialogs">Message</a></li>
        <li className={nav.item__link}><a href="">News</a></li>
        <li className={nav.item__link}><a href="">Music</a></li>
        <li className={nav.item__link}><a href="">Settings</a></li>
      </ul>
    </nav>
  )
}

export default Navbar;

