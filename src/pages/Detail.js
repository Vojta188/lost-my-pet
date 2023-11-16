import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import "./Detail.css"
import Navbar from '../components/Navbar'

const Detail = () => {
    const {detailId} = useParams()
    const [DataSearch,setDataSearch] = useState([])
    const [detail, setDetail] = useState("wait")
  

    

    const addData = async()=>{
      const data = await fetch("http://localhost:3001/getData");
    const finalData = await data.json();
    const{documents} = finalData;
    setDataSearch(documents)
    
    }
    
    
    useEffect(()=>{
    
    addData()
   
    
    },[])

     
    const oneSpecificDetail = DataSearch.find ((oneDetail)=>{
      return oneDetail._id === detailId
      
     })

       
    
     if (oneSpecificDetail)
       {
        const {_id,name,photo,rasa,city, callNumber,email} = oneSpecificDetail
        
      
  return (
    <section >
      <Navbar />
      <div className='all-detail'>
      <div className='one-detail'>
      <img src={photo}></img>
      <h2>{name}</h2>
      <p>{rasa}</p>
      <p>{city}</p>
      <h2 className='contact'>Kontakty:</h2>
      <p>{callNumber}</p>
      <p>{email}</p>

      
        <button className='btn-local'>Lokalizovat</button>
        <button className='btn-my-pet'>Můj mazlíček</button>
      
      </div>
      </div>
    </section>
  )
   }
}

export default Detail