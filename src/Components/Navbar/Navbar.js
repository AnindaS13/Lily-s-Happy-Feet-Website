import React from 'react';
import './Navbar.css';
import Nav from 'react-bootstrap/Nav'


function Navbar()
{
    return(
<div className = "navbar">

<p className="text-center mt-4 mb-4">Lily's Happy Feet</p>
  <Nav className="justify-content-end" activeKey="/home" sticky = "top" >
        

    <Nav.Item>
      <Nav.Link href="/home">Who we are</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1">Services</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-2">Pricing</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
    </Nav.Item>
  </Nav>

  
  </div> 



    )
}


export default Navbar;