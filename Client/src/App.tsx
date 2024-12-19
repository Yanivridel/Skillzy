import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { SidebarTrigger } from "./components/ui/sidebar";
import { AppSidebar } from "./components/SideBar/SideBar";
import LogIn from "./components/Log/logIn";
import SignUp from "./components/Log/Signup";
import Home from "./Pages/Home";
import { useDispatch } from "react-redux";
import { getCookie } from "./utils/cookies";
import { getSelf } from "./utils/userApi";
import { setUser } from "./store/slices/userSlices";
import { useEffect } from "react";
import About from "./Pages/About";
import Lessons from "./Pages/Lessons";
import Profile from "./Pages/Profile";
import logoLight from "./assets/logo/light.png"
import logoDark from "./assets/logo/dark.png"
import TeacherProfile from "./components/TeacherProfile/TeacherProfile";
import Contact from "./Pages/Contact";

function App() {
  const dispatch = useDispatch();

  const reloadUser = async () => {
    const token = getCookie('token');
    if (token) {
        const user = await getSelf(token);
        if(user)
          dispatch(setUser(user));
    }
  }

  useEffect( () => {
    reloadUser();
  }, []);
  return (
    
    <Router>
          <AppSidebar />
          <SidebarTrigger />
       {/* <div className="block"
       ><img src={logoLight} className="w-[70px] h-[70px] object-cover" alt="" /></div> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/teacherProfile/:id" element={<TeacherProfile />} />

        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>

  )
}

export default App
