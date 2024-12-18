import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { SidebarTrigger } from "./components/ui/sidebar";
import { AppSidebar } from "./components/SideBar/SideBar";
import Teachers from "./Pages/Teachers";
import LogIn from "./components/Log/logIn";
import SignUp from "./components/Log/Signup";


function App() {
  return (
    <Router>
          <AppSidebar />
          <SidebarTrigger />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>

  )
}

export default App
