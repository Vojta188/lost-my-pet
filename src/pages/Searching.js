import Navbar from "../components/Navbar"
import DataSearch from "../DataSearch"
import "./Searching.css"

const Searching = () => {
  return (
    <div>
        <Navbar />

        <section className="all-pet">
          {DataSearch.map((onePet)=>{
           const {id,name,img,animal,rasa,city} = onePet 

            return <article key={id} className="one-pet">
              <img src ={img} alt="" ></img>
              <h2>{name}</h2>
              <p>{animal}</p>
              <p>{rasa}</p>
              <p>{city}</p>
            </article>
          })}
        </section>
    </div>
  )
}

export default Searching