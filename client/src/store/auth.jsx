import {createContext, useContext, useEffect, useState} from "react";

export const AuthContext = createContext()

export const AuthProvider = ({children})=>{
    const [token, setToken] = useState(localStorage.getItem("token"))
    const [user, setUser] = useState('')
    const [isLoading,setIsLoading]=useState(true)
    const [services, setServices] = useState([])
    const AuthorizationToken = `Bearer ${token}`

    const WebClassUrl = 'https://mern-webclass-1.onrender.com/'

    const storeTokenInLS = (serverToken) => {
        setToken(serverToken)
        return localStorage.setItem("token",serverToken)
    }

    let isLoggedIn = !!token

// tackle logout finctionality
    const LogoutUser = ()=>{
        setToken("")
        return localStorage.removeItem("token")
    }

    //jwt authentication - to get the currently loggedin user data
    const userAuthentication = async()=>{
        try {
            setIsLoading(true)
            const response = await fetch(`${WebClassUrl}/api/auth/user`,{
                method:"GET",
                headers:{
                    Authorization: AuthorizationToken
                }
            })
            if (response.ok) {
                const data = await response.json()
                setUser(data.userData)
                setIsLoading(false)
            }else{setIsLoading(false)}
        } catch (error) {
            console.log("errer featching user data")
        }
    }

    // to fetch the services teda fron DB 
    const getServices = async ()=>{
        try {
            const response = await fetch(`${WebClassUrl}/api/data/service`,{
                method:"GET"
            })
            // console.log(response)
            if (response.ok) {
                const services = await response.json()
                // console.log(response)
                // setServices(data.msg)
                setServices(services.data)
            }
        } catch (error) {
            console.log(`services fronted error ${error}`)
        }
    }

    useEffect(()=>{
        getServices();
        userAuthentication();
    },[])

    return (<AuthContext.Provider value={{isLoggedIn,storeTokenInLS,LogoutUser,user,services,AuthorizationToken,isLoading,WebClassUrl}}>
        {children}
    </AuthContext.Provider>)
}

export const useAuth = ()=>{
    const AuthContextValue = useContext(AuthContext)
    if (!AuthContextValue) {
        throw new Error("useAuth used outside of the Provider")
    }
    return AuthContextValue
}