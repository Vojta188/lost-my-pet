import {BrowserRouter,Route,Routes} from "react-router-dom"
import Search from "./pages/Search"
import Searching from "./pages/Searching"
import Home from "./pages/Home"
import Login from "./pages/Login"

const App = () => {
  return ( <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/searching" element={<Searching />} />
      <Route path="/login" element={<Login />} />
      
    </Routes>
  </BrowserRouter>

  )
}

export default App
