import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function NavBarMenu() {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">Orders</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Nav className="me-auto">
                       <NavLink className="show-orders-nav" to="/">Orders</NavLink>
                       <NavLink className="add-order-nav" to="addOrder">Add Order</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBarMenu;
