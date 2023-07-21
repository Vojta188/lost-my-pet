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
        <MainImg />
        <Btn />
      </header>
        <div className="form">
        <Form />
        </div>
        

    </div>
  )
}

export default Home