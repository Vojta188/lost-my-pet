import "./Form.css"
import { useState } from "react"
import FileUpload from "./FileUpload"

const Form = () => {

  const [name,setName] = useState("")
  const [animal, setAnimal] = useState("")
  const[rasa,setRasa] = useState("")
  const[city,setCity] = useState("")
  const[phonenumber,setPhonenumber] = useState("+420")
  const[email,setEmail] = useState("")
  const[allAnimal,setAllAnimal] = useState([])

  

  const formSubmit=(event)=>{
    event.preventDefault()
    if(name&&animal&&rasa&&city&&phonenumber&&email)
    {
      const oneAnimal = {name:name,animal:animal,rasa:rasa,city:city,phonenumber:phonenumber,email:email}
      setAllAnimal((allAnimal)=>{
        return[...allAnimal,oneAnimal]
      })

       //Uložení do databáze
    fetch("http://localhost:3001/saveData",{
      method:"post",
      headers:{
        "Accept":"application/json",
        "Content-type":"application/json"
      },
      body:JSON.stringify({name:name,animal:animal,rasa:rasa,
        city:city,callNumber:phonenumber,email:email })
    }).then((data) => { 
      return data.json()
     }).then((finalData) => { 
      console.log(finalData.msg)
     })



    }else{
      console.log("Něco není vyplněno!")
    }
    setName("")
    setAnimal("")
    setRasa("")
    setCity("")
    setPhonenumber("+420")
    setEmail("")

   
  }

  return (
    <div className="formMain">
        <form onSubmit={formSubmit} action="http://localhost:3000/upload" method="POST">
        <input className="MainInput" value={name} onChange={(event)=>setName(event.target.value)} type="text" placeholder="Jméno zvířete..." /><br/>
        <input className="MainInput" value={animal} onChange={(event)=>setAnimal(event.target.value)} type="text" placeholder="Zvíře..." /><br/>
        <input className="MainInput" value={rasa} onChange={(event)=>setRasa(event.target.value)} type="text" placeholder="Rasa..." /><br/>
        <input className="MainInput" value={city} onChange={(event)=>setCity(event.target.value)} type="text" placeholder="Město..." /><br/>
        <input className="MainInput" value={phonenumber} onChange={(event)=>setPhonenumber(event.target.value)} type="number" placeholder="Telefon..." /><br/>
        <input className="MainInput" value={email} onChange={(event)=>setEmail(event.target.value)} type="email" placeholder="Email..." /><br/>
        <label for="file-photo" className="file">Přidat fotku</label>
        <FileUpload /><br/>
        <input className="form-submit" type="submit" />
        </form>

   
    


        {
          allAnimal.map((oneAnimal,index)=>{
            const {name,animal,rasa,city,phonenumber,email} = oneAnimal
            return<div key={index}>
              <h1>{name}</h1>
              <p>{animal}</p>
              <p>{rasa}</p>
              <p>{city}</p>
              <p>{phonenumber}</p>
              <p>{email}</p>
            </div>
          })
        }

    </div>
  )
}

export default Form
