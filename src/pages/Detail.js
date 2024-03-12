import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import "./Detail.css"
import Navbar from '../components/Navbar'
import { NavLink } from "react-router-dom"

const Detail = () => {
    const {detailId} = useParams()
    const [DataSearch,setDataSearch] = useState([])
    const road = "http://localhost:3000/images/file-"

    

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
        const {name,file,rasa,city, callNumber,email} = oneSpecificDetail
       
      
  return (
    <section >
      <Navbar />
      <div className='all-detail'>
      <div className='one-detail'>
      <img className='one-detail-img' src ={road + file} alt="animal"></img>
      {console.log(road+file)}
      <h2>{name}</h2>
      <p>{rasa}</p>
      <p>{city}</p>
      <h2 className='contact'>Kontakty:</h2>
      <p>{callNumber}</p>
      <p>{email}</p>

      
       <NavLink to="/map"><button className='btn-local'>Lokalizovat</button></NavLink>
        <button className='btn-my-pet'>Můj mazlíček</button>
      
      </div>
      </div>
    </section>
  )
   }
}

export default Detail