import React from "react";
import{Link} from 'react-router-dom'
class Navbar extends React.Component {
    render(){
        return <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to="/" className="navbar-brand">ALLU ARJUN</Link>
            <div className="ml-auto">
              <ul className="navbar-nav">
                <li className="nav-list">
                  <Link to="/Home" className="nav-link">HOME</Link></li>
                <li className="nav-list">
                  <Link to="/About" className="nav-link">ABOUT</Link></li>
               
              </ul>  
            </div>
             </nav>
    }
}
export default Navbar