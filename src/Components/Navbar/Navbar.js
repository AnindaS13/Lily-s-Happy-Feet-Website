import React from 'react';
import './Navbar.css';
import Nav from 'react-bootstrap/Nav'
import reactDom from 'react-dom';
import MenuItems from './MenuItems';
import {Button} from '../Button'
import './Navbar.css';


class Navbar extends React.Component {
  state = { clicked: false}

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked})
  }

  render()
  {
    return(
        <nav className = "NavbarItems">
          <h1 className = "navbar-logo">React<i className = "fab fa-react"></i></h1>
          <div className = "menu-icon" onClick = {this.handleClick}>
              <i className = {this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
          <ul className = {this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
            {MenuItems.map((item, index) =>{
              return (
                <li key = {index}>
                    <a className = {item.cName} href = {item.url}>
                    {item.title}
                    </a>  
                </li>
              )
            })}
          </ul>
          <Button>Sign Up</Button>
        </nav>
    )
  }
}
/*function Navbar()
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
*/

export default Navbar;