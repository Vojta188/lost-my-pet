import Navbar from "../components/Navbar"
import "./Login.css"
const Login = () => {
  return (
    <div>
        <Navbar />
        <form className="form-login">
            <input className="email-log" type="text" placeholder="email..."/><br/>
            <input className="email-log" type="text" placeholder="heslo..." /><br/>
            <input className="btn-log" type="submit" value="Přihlásit se" />
        </form>    
    </div>
  )
}

export default Login