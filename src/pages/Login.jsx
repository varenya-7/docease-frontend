import Header from "../components/auth/Header"
import Login from "../components/auth/Login"
import Navbar from "../components/auth/Navbar"
export default function LoginPage(){
    return(
        <>
             <Navbar/> 
            <Header
                heading="Login to your account"
                paragraph="Don't have an account yet? "
                linkName="Signup"
                linkUrl="/signup"
                />
                <Login/>
        </>
    )
}