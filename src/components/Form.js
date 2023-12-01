import "./Form.css"
import { useState,useEffect } from "react"
import axios from 'axios';
import "./FileUpload.css";


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
      const oneAnimal = {name:name,animal:animal,rasa:rasa,city:city,phonenumber:phonenumber,email:email,file:file.name}
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
        city:city,callNumber:phonenumber,email:email,file:file.name })
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

    //odeslání obrázku
    handleUpload()
    //konec odeslání obrázku



  }

//Odeslání obrázku 
const [file, setFile] = useState(null);
  const [getMetadata,setGetMetadata] = useState(null)

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', file);

      await axios.post('http://localhost:3001/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Soubor byl úspěšně nahrán.');
    } catch (error) {
      console.error('Chyba při nahrávání souboru:', error);
    }
  };





  //get Metadata

  function zkratitCislo(cislo, delka) {
    return cislo.toString().slice(0, delka);
  }



useEffect(()=>{
  if (file) {
    const fileSizeInBytes = file.size;
    const fileSizeInKilobytes = fileSizeInBytes / 1024; // převod na kilobajty
    const fileSizeInMegabytes = fileSizeInKilobytes / 1024; // převod na megabajty

    console.log('Velikost souboru v bajtech:', fileSizeInBytes);
    console.log('Velikost souboru v kilobajtech:', fileSizeInKilobytes);
    console.log('Velikost souboru v megabajtech:', zkratitCislo(fileSizeInMegabytes,2));
    console.log(file.name)
   if(fileSizeInMegabytes>1)
   {setGetMetadata(" Soubor vybrán: " +zkratitCislo(fileSizeInMegabytes,4)+" MB ")}
   else{
    setGetMetadata(" Soubor vybrán: " + zkratitCislo(fileSizeInKilobytes,3)+" KB ")
   }
  }
})

//Konec odeslání obrázku 






  return (
    <div className="formMain">
        <form onSubmit={formSubmit}  method="POST">
        <input className="MainInput" value={name} onChange={(event)=>setName(event.target.value)} type="text" placeholder="Jméno zvířete..." /><br/>
        <input className="MainInput" value={animal} onChange={(event)=>setAnimal(event.target.value)} type="text" placeholder="Zvíře..." /><br/>
        <input className="MainInput" value={rasa} onChange={(event)=>setRasa(event.target.value)} type="text" placeholder="Rasa..." /><br/>
        <input className="MainInput" value={city} onChange={(event)=>setCity(event.target.value)} type="text" placeholder="Město..." /><br/>
        <input className="MainInput" value={phonenumber} onChange={(event)=>setPhonenumber(event.target.value)} type="number" placeholder="Telefon..." /><br/>
        <input className="MainInput" value={email} onChange={(event)=>setEmail(event.target.value)} type="email" placeholder="Email..." /><br/>
        <label className='file_upload' for="file">Vybrat Soubor</label>
        <input id='file' type="file" onChange={handleFileChange} />
        <button className='btn_file' onClick={handleUpload}>Nahrát soubor</button><br/>
      
        <p className='file_size'>{getMetadata}</p>
        
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
