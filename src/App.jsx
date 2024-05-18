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
import PatientsPortal from './pages/PatientsPortal'
import DoctorDashboard from './pages/DoctorsDashboard'
import PatientsDashboard from './pages/PatientsDashboard';



function App() {
  return (
    <div>
     <BrowserRouter>
        <Routes>
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/signup" element={<SignupPage/>} />
            <Route path="/" element={<LandingPage/>} />
            <Route path="/patientsportal" element={<PatientsPortal/>} />
            <Route path="/doctorsdashboard" element={<DoctorDashboard/>} />
            <Route path="/patientsdashboard" element={<PatientsDashboard/>} />         
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;