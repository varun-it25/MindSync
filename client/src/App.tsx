import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Landing_Page from "./pages/Landing-Page"
import Not_Found from "./pages/Not-Found"
import Sign_Up from "./pages/Signup"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Start from "./pages/Start"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing_Page />} />
        <Route path="/signup" element={<Sign_Up />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/start" element={<Start />} />
        <Route path="/*" element={<Not_Found />} />
      </Routes>
    </Router>    
  )
}

export default App