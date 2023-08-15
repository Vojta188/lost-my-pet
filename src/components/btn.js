import React from 'react'
import "./btn.css"
import { Link } from 'react-router-dom'
const Btn = () => {
    
    
    
  

  return (
    <div className='btn'>
      <h1 className='main-txt'>Pomoc při hledání domácího mazlíčka,<br/> kdekoliv a odkudkoliv.</h1>
       <Link to="/search"> <button  className='button-one'>SET FOR FREE</button></Link>
      <Link to="/searching"><button className='button-two'>GO TO SEARCH</button></Link> 
    </div>
  )
}

export default Btn