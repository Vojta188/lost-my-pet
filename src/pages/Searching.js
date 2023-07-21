import Navbar from "../components/Navbar"
import "./Searching.css"
import { useState,useEffect} from "react"

const Searching = () => {

const [DataSearch, setDataSearch] = useState([]);
const [openContact,setOpenContact] = useState(false)

const addData = async()=>{
  const data = await fetch("http://localhost:3001/getData");
const finalData = await data.json();
const{documents} = finalData;
setDataSearch(documents)


}
useEffect(()=>{
addData()
},[])

console.log(DataSearch)
return (
    <div>
        <Navbar />

        <section className="all-pet">
          {DataSearch.map((onePet,index)=>{
           const {name,photo,animal,rasa,city, callNumber,email} = onePet 

            return <article key={index} className="one-pet">
              <img src ={photo} alt="" ></img>
              
              <label for="name"  >Jméno</label>
              <h2 id="name">{name}</h2>
              <label for = "animal">Zvíře</label>
              <p id="animal">{animal}</p>
              <label for = "rasa">Rasa</label>
              <p id="rasa">{rasa}</p>
              <label for = "city">Město</label>
              <p id="city">{city}</p>
              <button onClick={() => setOpenContact(!openContact)}>Zobrazit kontaktní údaje</button>
              {openContact && <div>
                <p>{callNumber}</p>
                <p>{email}</p>
                </div>}
            </article>
          })}
           
        </section>
    </div>
  )
}

export default Searching