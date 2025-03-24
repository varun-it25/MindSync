import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Landing_Page from "./pages/Landing-Page"
import Not_Found from "./pages/Not-Found"
import Sign_up from "./pages/Sign-Up"
import Login from "./pages/Login"
import Admin_Panel from "./pages/Admin-Panel"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing_Page />} />
        <Route path="/signup" element={<Sign_up />} />
        <Route path="/app" element={<Admin_Panel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Not_Found />} />
      </Routes>
    </Router>    
  )
}

export default App