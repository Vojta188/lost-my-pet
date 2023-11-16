import {BrowserRouter,Route,Routes} from "react-router-dom"
import Search from "./pages/Search"
import Searching from "./pages/Searching"
import Home from "./pages/Home"
import Detail from "./pages/Detail"


const App = () => {
  return ( <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/searching" element={<Searching />} />
      <Route path="/getData/:detailId" element = {<Detail />} />
      
      
    </Routes>
  </BrowserRouter>

  )
}

export default App
