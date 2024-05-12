import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} 
from "react-router-dom";
import LoginPage from './pages/Login';
import SignupPage from './pages/SignUp';
import LandingPage from './pages/LandingPage'
import PatientsPage from './pages/PatientsPortal'
import DoctorPage from './pages/DoctorsPortal'



function App() {
  return (
    <div>
     <BrowserRouter>
        <Routes>
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/signup" element={<SignupPage/>} />
            <Route path="/" element={<LandingPage/>} />
            <Route path="/patientspage" element={<PatientsPage/>} />
            <Route path="/doctorspage" element={<DoctorPage/>} />
                     
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;