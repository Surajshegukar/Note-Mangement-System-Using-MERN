import React, {useEffect } from 'react'
import { Link, useLocation } from "react-router-dom";
const Navbar =()=>{
    let location = useLocation();
    useEffect(() => {
      console.log(location.pathname);
      }
    , [location]);
    

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">rNote</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/" ? "active":""}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/about" ? "active":""}`} to="/about">About</Link>
                        </li>
                        
                        
                    </ul>
                    <form class="d-flex">
                        <button class="btn btn-primary mx-2" to="/login" role='button'>Login</button>
                        <button class="btn btn-primary mx-2" role='buttom' to="/signup" >Sign In</button>
                    </form>
                </div>
            </div>
        </nav>

    )
    
}
export default Navbar;
