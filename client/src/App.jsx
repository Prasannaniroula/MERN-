import {BrowserRouter, Route, Routes} from "react-router-dom"; 
import { Home } from "./pages/Home";
import {About} from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NavBar from "./Components/NavBar";
import { Error } from "./pages/404Errorpage";
import { Logout } from "./pages/Logout";

const App = ()=>{
  return( <>
   <BrowserRouter>
     <Routes>
      <Route path="/" element={<><NavBar/><Home/></>} />
      <Route path="/about" element={<><NavBar/><About/></>} />
      <Route path="/contact" element={<><NavBar/><Contact/></>} />
      <Route path="/service" element={<><NavBar/><Service/></>} />
      <Route path="/register" element={<><NavBar/><Register/></>} />
      <Route path="/login" element={<><NavBar/><Login/></>} />
      <Route path="/logout" element={<><NavBar/><Logout/></>} />
      <Route path="*" element={<Error/>}/>
     </Routes>
   </BrowserRouter>
  </> 
  )
}

export default App;