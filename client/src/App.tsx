import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Landing_Page from "./pages/Landing-Page"
import Not_Found from "./pages/Not-Found"
import Sign_Up from "./pages/Signup"
import Login from "./pages/Login"
import Admin_Panel from "./pages/Admin-Panel"
<<<<<<< HEAD

=======
>>>>>>> 082ca67cf24cf11e037e72e4fabf8d21e28c9b8c
// import { Library } from "lucide-react"
import Library from "./pages/Library"
import Meditation from "./pages/Meditation"
import Dashboard from "./pages/Dashboard"
import Start from "./pages/Start"
<<<<<<< HEAD
import ChallengesPage from "./pages/Challenges"
import Games from "./pages/Games"

=======
>>>>>>> 082ca67cf24cf11e037e72e4fabf8d21e28c9b8c

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing_Page />} />
        <Route path="/signup" element={<Sign_Up />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/start" element={<Start />} />
        <Route path="/games" element={<Games />} />
        <Route path="/challenges" element={<ChallengesPage />} />
        <Route path="/*" element={<Not_Found />} />
<<<<<<< HEAD

        <Route path="/library" element={<Library/>} />


        <Route path="/meditation" element={<Meditation />} />

=======
        <Route path="/library" element={<Library/>} />
        <Route path="/meditation" element={<Meditation />} />
>>>>>>> 082ca67cf24cf11e037e72e4fabf8d21e28c9b8c
      </Routes>
    </Router>    
  )
}

export default App