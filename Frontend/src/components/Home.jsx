import React from 'react'
import { useEffect } from 'react'
const Home = () => {
  
  useEffect(()=>{
    
    const fetchBackendHello = async() =>{
      try{
        const data = await axios.get("http://localhost:3000/users/profile")
        console.log(data.data.data)
        setCount(data.data.data);
      } catch (err){
        console.log(err);
      }
    }
    fetchBackendHello();
  }, [])
  return (
    <div>Home</div>
  )
}

export default Home