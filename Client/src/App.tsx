import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Teachers from "./components/ui/teachers";
import { AppSidebar } from "./components/SideBar";
import { SidebarTrigger } from "./components/ui/sidebar";


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
