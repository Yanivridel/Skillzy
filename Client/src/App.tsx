import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Teachers from "./components/ui/teachers";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teachers" element={<Teachers />} />
      </Routes>
    </Router>

  )
}

export default App
