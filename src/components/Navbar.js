import { NavLink } from "react-router-dom"
import "./Navbar.css"


const Navbar = () => {
  return (<header>
    <div className="logo"><h2>Najdi svého mazlíčka</h2></div>
    <nav className="nav">
    <NavLink  to="/" className={({ isActive }) =>
        isActive ? "activeLink" : "nonactiveLink link"
      } >Domů </NavLink>
     <NavLink  to="/search" className={({ isActive }) =>
        isActive ? "activeLink" : "nonactiveLink link"
      } >Hledat </NavLink>
      <NavLink  to="/searching" className={({ isActive }) =>
        isActive ? "activeLink" : "nonactiveLink link"
      }  >Hledané </NavLink>
      


      
    </nav>
   
  </header>

  )
}

export default Navbar