import React from 'react';
import './Navbar.css'
function Navbar()
{
	return (
		
		<nav className="navbar navbar-expand-lg   border border-secondary" >
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse navbar-light justify-content-around" id="navbarSupportedContent">
    <ul className="navbar-nav  width: 200px">
      <li className="nav-item active" >
        <a className="nav-link" href="#"><h3>Books </h3><span className="sr-only">(current)</span></a>
      </li>
            
    </ul>
	
	<ul className="navbar-nav  width: 200px">
      <li className="nav-item active" >
        <a className="nav-link" href="#">Docs <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Github</a>
      </li>   
	  <li className="nav-item">
        <a className="nav-link" href="#">About</a>
      </li>     
    </ul>
  </div>
</nav>
	)
	

}

export default Navbar;