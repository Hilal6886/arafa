import { useState, useEffect } from "react";
import { useNavigate,Routes, Route,useLocation} from "react-router-dom";
import './app.css';
import useAdmin from "../src/utils/hooks"
import Home from "./components/Home/Home.js"
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from "././firebase";
import ArfaSchoolLayout from "layouts/arfaschool/ArfaSchoolLayout.jsx";
import ArfaDigitalSchoolLayout from "layouts/ArfaDigitalSchoolLayout/ArfaDigitalSchoolLayout";
import Signup from "pages/Signup";
import Login from "pages/Login";
import FAQ from "pages/AddFaq";
import Faqupdate from "pages/Faqupdate";
const App = () => {
  const [active, setActive] = useState("CBlog");
  const [user, setUser] = useState(null);
  const location = useLocation();

  
  const Navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null)
  const [timeActive, setTimeActive] = useState(false)
  useAdmin()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user || {});
      setCurrentUser(user || {})
      console.log("USERRRRRRRRRRRRRRRRRRRRRRRRR", user)
    })
  }, [])
  return (
    <Routes>
     
      <Route path="/" element={<Home />} />
      <Route path="/arfa/*" element={<ArfaSchoolLayout />} />
      <Route path="/arfaDigital/*" element={<ArfaDigitalSchoolLayout />} />
      <Route path="/signup" element={!currentUser?.emailVerified ? <Signup /> : <Navigate to='/' replace /> } />
      <Route path="/login" element={<Login />} />
      <Route path="/addfaq" element={<FAQ />} />
      <Route path="/updatefaq/:id" element={<Faqupdate />} />
      
    </Routes>
    
  );
};

export default App;
