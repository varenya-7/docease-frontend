import React, { useEffect,useState } from 'react'
import { createContext,useContext } from 'react'
import { useNavigate } from 'react-router-dom';

const UserContext = createContext();

export const UserState = ()=>{
    const state= useContext(UserContext)
    return state
}

const UserProvider = ({children}) => {

    const [user,setUser] = useState();
    const [loading,setLoading] = useState(true)
    const navigate = useNavigate();

    useEffect(()=>{
        const userData = JSON.parse(localStorage.getItem("userdata"))
        console.log("User data from local storage:", userData);
        setUser(userData)
        console.log("This is user",user)
        setLoading(false)
       
    },[])

  return (
    <UserContext.Provider value={{user,loading,setUser}}>
    {children}
    </UserContext.Provider>
  )
}


export default UserProvider;