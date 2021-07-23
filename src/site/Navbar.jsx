import React, {useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    Button
} from 'reactstrap';

import GroceryListGet from '../components/GroceryListGet';

const Navigation = (props) => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (

 <div class="nav-container">
        <Navbar dark>
          
          <NavbarBrand
                    href="/"
            className="mr-auto"
            img src="./assets/logos/bake-white.png">
            LISTO
          </NavbarBrand>
          
        <NavbarToggler
            onClick={toggleNavbar}
            className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          
            <Nav navbar>
              
              <NavItem>
                <Button
                  className="btn-nav"
                  onClick={props.clickLogout}>Logout
                </Button>
            </NavItem>
              
            <NavItem>
                <Button
                  className="btn-nav"
                  onClick={props.GroceryListGet}>My Grocery Lists</Button>
              </NavItem>
              
            </Nav>
            
          </Collapse>
          
      </Navbar>
    </div>
    )
}

export default Navigation;

