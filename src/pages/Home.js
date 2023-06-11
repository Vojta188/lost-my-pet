import MainImg from "../components/MainImg"
import Navbar from "../components/Navbar"
import Form from "../components/Form"
import "./Home.css"

const Home = () => {
  return (
    <div>
      <header className="header-home">
      <Navbar />
        <MainImg />
      </header>
        <div className="form">
        <Form />
        </div>
        

    </div>
  )
}

export default Home