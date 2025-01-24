import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <div className="container">
      <nav>
        <ul className="d-flex">
          <li className="mx-3">
            <NavLink to='/'>Home</NavLink>
          </li>
          <li className="mx-3">
            <NavLink to='/ricette-salvate'>Ricette salvate</NavLink>
          </li>
          <li className="mx-3">
            <NavLink to='/chi-siamo'>Chi siamo</NavLink>
          </li>
        </ul>

      </nav>

    </div>
  )
}

export default NavBar
