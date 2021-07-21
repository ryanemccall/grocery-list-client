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

 <div>
      <Navbar color="faded" light>
                <NavbarBrand
                    href="/"
                    className="mr-auto">Listo</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
            <Button onClick={props.clickLogout}>Logout</Button>
                        </NavItem>
                        <br></br>
            <NavItem>
             <Button onClick={props.GroceryListGet}>Grocery Lists</Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    )
}

export default Navigation;

