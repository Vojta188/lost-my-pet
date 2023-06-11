import { useState,useEffect } from "react"
import "./MainImg.css"
import Data from "./Data"
const MainImg = () => {
  const [index, setIndex] = useState(0)
  
  useEffect( () => {
    if (index < 0){
        setIndex(Data.length - 1)
    } else if (index > Data.length - 1){
        setIndex(0)
    }
}, [index])

useEffect( () => {
  let setIntervalID = setInterval( () => {
      setIndex(index + 1)
  }, 3000)
  return () => clearInterval(setIntervalID)
}, [index])

  return (<section className="all-img">
    <div className="all-img-content">
      {Data.map((oneImg, oneImgIndex)=>{
     const {id,img} = oneImg

     let mainClass = "next-slide"


     if (oneImgIndex === index){
         mainClass = "active-slide"
     }


     if (oneImgIndex === index - 1 || (index === 0 && oneImgIndex === Data.length - 1)){
         mainClass = "last-slide"
     }



     return(
      <article  key={id} className={mainClass}>
          <img src={img} alt=""/>
      </article>
     )
    })}</div>
    </section>
  )
}

export default MainImg