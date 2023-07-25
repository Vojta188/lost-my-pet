import Navbar from "../components/Navbar"
import "./Searching.css"
import { useState,useEffect} from "react"

const Searching = () => {

const [DataSearch, setDataSearch] = useState([]);
const [openContact,setOpenContact] = useState(false)
const[contact,setContact] = useState("")


const addData = async()=>{
  const data = await fetch("http://localhost:3001/getData");
const finalData = await data.json();
const{documents} = finalData;
setDataSearch(documents)

}




useEffect(()=>{
addData()

},[])

return (
    <div>
        <Navbar />

        <section className="all-pet">
          {DataSearch.map((onePet,index)=>{
           const {name,photo,animal,rasa,city, callNumber,email} = onePet 

            return <article key={index} className="one-pet">
              <img src ={photo} alt="" ></img>
              
              <label  className="label"  >Jméno</label>
              <p id="name">{name}</p>
              <label className="label">Zvíře</label>
              <p id="animal">{animal}</p>
              <label  className="label">Rasa</label>
              <p id="rasa">{rasa}</p>
              <label  className="label">Město</label>
              <p id="city">{city}</p>
              <button className="btn-contact" onClick={()=>setOpenContact(!openContact)}>Zobrazit kontaktní údaje</button>
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