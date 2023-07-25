import MainImg from "../components/MainImg"
import Navbar from "../components/Navbar"
import Form from "../components/Form"
import Btn from "../components/btn"
import "./Home.css"
import img from "../components/img/main.jpeg"

const Home = () => {
  return (
    <div className="home">
      <header className="header-home" >
      <Navbar />
      
        <Btn />
      </header>
      <article>
      
      
        <div className="form">
        <MainImg />
        <Form />
        </div>
        
        </article>
    </div>
  )
}

export default Home