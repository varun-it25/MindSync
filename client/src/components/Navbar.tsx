import { Link } from "react-router-dom"
import { Button } from "./ui/button"

const Navbar = () => {
  return (
    <header className="flex justify-center items-center p-4 border-b-2 bg-black sticky top-0 z-50">
      <div className="max-w-6xl flex-1 flex justify-between items-center">
        <Link to={`/`}><p className="font-semibold text-xl">MindSync</p></Link>
        <nav className="hidden sm:flex flex-1 justify-center items-center space-x-6">
          <Link to={`/`} className="hover:font-medium">Home</Link>
          <Link to={`/about`} className="hover:font-medium">About</Link>
          <Link to={`/contact`} className="hover:font-medium">Contact</Link>
        </nav>
        <Link to={`/start`}><Button className="cursor-pointer">Get Started</Button></Link>
      </div>
    </header>
  )
}

export default Navbar