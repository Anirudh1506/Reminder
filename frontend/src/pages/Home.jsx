import { useState, useEffect } from "react"
import axios from 'axios'

const Home = () => {
  const [data,setData]=useState([])

  useEffect(()=>{
    axios.get('http://localhost:8080/rem')
    .then((response)=> setData(response.data))
  },[])
  return (
    <div>
      {
        data.map((d)=>(
          <div key={d._id}>
            <h1 className="text-4xl">{d.data}</h1>
          </div>
        ))
      }
    </div>
  )
}

export default Home