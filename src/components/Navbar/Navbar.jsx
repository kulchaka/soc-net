import nav from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={nav.nav}>
      <ul className={nav.links}>
        <li><a href="">Profile</a></li>
        <li><a href="">Message</a></li>
        <li><a href="">News</a></li>
        <li><a href="">Music</a></li>
        <li><a href="">Settings</a></li>
      </ul>
    </nav>
  )
}

export default Navbar;
