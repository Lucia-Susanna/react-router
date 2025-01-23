import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/chi-siamo'>Chi siamo</NavLink>
        </li>
        <li>
          <NavLink to='/blog'>Blog</NavLink>
        </li>
      </ul>

    </nav>
  )
}

export default NavBar
