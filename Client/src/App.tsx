import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { SidebarTrigger } from "./components/ui/sidebar";
import { AppSidebar } from "./components/SideBar/SideBar";
import Teachers from "./Pages/Teachers";
import Filter from "./components/Filter/filter";
import TeacherProfilePage from "./Pages/TeacherProfilePage";

function App() {
  return (
    <Router>
          <AppSidebar />
          <SidebarTrigger />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/teacherProfile/:id" element={<TeacherProfilePage />} />
        <Route path="/filter" element={<Filter />} />
      </Routes>
    </Router>

  )
}

export default App
