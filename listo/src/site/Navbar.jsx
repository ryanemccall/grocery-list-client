import React, {useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Nav,
    NavItem,
    Button
} from 'reactstrap';

const Navigation = (props) => {
    const[isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        let newIsopen = !isOpen;
        setIsOpen(newIsopen);
    }

    return (
        <Navbar color="faded" light expand="md">
            <NavbarBrand href="/">Listo</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Button onClick={props.clickLogout}>Logout</Button>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Navigation;