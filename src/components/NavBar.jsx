import { Link } from "react-router-dom";
import React from "react";
import Logout from "./Logout";
import MusicSearch from "./MusicSearch"

// import './NavBar.css';

const NavBar = ({user}) => {
  return ( 
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
      </div>
        
  <ul class="navbar-nav me-auto">
      {user &&
          <React.Fragment>
            
            <li><Logout/></li>
            <li><MusicSearch/></li>
            </React.Fragment>
            }
        {!user && 
        <React.Fragment>
          
            <Link to = '/register'>
              <button type="button" class= "btn btn-link">
                <li class="nav-item" >Register</li>
              </button>
            </Link>  
            <Link to = '/Login'>
              <button type="button" class = "btn btn-link">
                <li class="nav-item">Login</li>
              </button>
            </Link>
            <Link to = '/MusicSearch'>
              <button type="button" class = "btn btn-link">
                <li class="nav-item">MusicSearch</li>
              </button>
            </Link>

        </React.Fragment>  
        }
        </ul>
    </nav>
   );
}

export default NavBar;