import { useState, useEffect } from 'react';


const useFetchLogin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userData, setUserData] = useState(false)
  const fetchUserLogin = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/user/user-info', {
        withCredentials: true 
      });
      
      // Fallback if profile is empty or null
      if (!response) {
        throw new Error('Invalid profile data');
      }

      if (response.data && response.data.id) {
        setIsLoggedIn(true);
        setUser(response.data);
      }
      // use this for operations and search
      //console.log(response.data)
    } catch (error) {
      setIsLoggedIn(false);
      console.log('User not Logged in', error);
    } finally {
      setCheckingAuth(false); 
    }
  }
  useEffect(()=>{
    fetchUserLogin()
  },[])
}
