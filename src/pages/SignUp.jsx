import Header from "../components/auth/Header";
import Signup from "../components/auth/SignUp";
import Navbar from "../components/auth/Navbar"
export default function SignupPage(){
    return(
        <>
          <Navbar/> 
            <Header
              heading="Signup to create an account"
              paragraph="Already have an account? "
              linkName="Login"
              linkUrl="/login"
            />
            <Signup/>
        </>
    )
}