import "./Form.css"
import { useState } from "react"

const Form = () => {

  const [name,setName] = useState("")
  const [animal, setAnimal] = useState("")
  const[rasa,setRasa] = useState("")
  const[city,setCity] = useState("")
  const[allAnimal,setAllAnimal] = useState([])

  const formSubmit=(event)=>{
    event.preventDefault()
    if(name&&animal&&rasa&&city)
    {
      const oneAnimal = {name:name,animal:animal,rasa:rasa,city:city}
      setAllAnimal((allAnimal)=>{
        return[...allAnimal,oneAnimal]
      })
    }else{
      console.log("Něco není vyplněno!")
    }
    setName("")
    setAnimal("")
    setRasa("")
    setCity("")
  }

  return (
    <div className="formMain">
        <form onSubmit={formSubmit}>
        <input className="MainInput" value={name} onChange={(event)=>setName(event.target.value)} type="text" placeholder="Jméno zvířete..." /><br/>
        <input className="MainInput" value={animal} onChange={(event)=>setAnimal(event.target.value)} type="text" placeholder="Zvíře..." /><br/>
        <input className="MainInput" value={rasa} onChange={(event)=>setRasa(event.target.value)} type="text" placeholder="Rasa..." /><br/>
        <input className="MainInput" value={city} onChange={(event)=>setCity(event.target.value)} type="text" placeholder="Město..." /><br/>
        <label for="file-photo" className="file">Přidat fotku</label>
        <input id="file-photo" type="file"  /><br/>
        <input className="form-submit" type="submit" />
        </form>



        {
          allAnimal.map((oneAnimal=>{
            const {name,animal,rasa,city} = oneAnimal
            return<div>
              <h1>{name}</h1>
              <p>{animal}</p>
              <p>{rasa}</p>
              <p>{city}</p>
            </div>
          }))
        }
    </div>
  )
}

export default Form
