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
//import { Link } from 'react-router-dom';

const Navigation = (props) => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (

 <div class="nav-container">
      <Navbar light>
                <NavbarBrand
                    href="/"
                    className="mr-auto">LISTO</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
                <Button
                  style={{ marginLeft: "1em" }}
                  onClick={props.clickLogout}>Logout</Button>
                        </NavItem>
                        <br></br>
            <NavItem>
                <Button
                  style={{ marginLeft: "1em" }}
                  onClick={props.GroceryListGet}>Grocery Lists</Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    )
}

export default Navigation;

