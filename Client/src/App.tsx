import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { SidebarTrigger } from "./components/ui/sidebar";
import { AppSidebar } from "./components/SideBar/SideBar";
import Teachers from "./Pages/Teachers";
import LogIn from "./components/Log/logIn";
import SignUp from "./components/Log/Signup";
import Home from "./Pages/Home";
import { useDispatch } from "react-redux";
import { getCookie } from "./utils/cookies";
import { getSelf } from "./utils/userApi";
import { setUser } from "./store/slices/userSlices";
import { useEffect } from "react";


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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>

  )
}

export default App
