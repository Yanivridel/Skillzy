import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { SidebarTrigger } from "./components/ui/sidebar";
import { AppSidebar } from "./components/SideBar/SideBar";
import Teachers from "./Pages/Teachers";


function App() {
  return (
    <Router>
          <AppSidebar />
          <SidebarTrigger />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/teachers" element={<Teachers />} />
      </Routes>
    </Router>

  )
}

export default App
