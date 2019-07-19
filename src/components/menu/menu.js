"use strict"
import React from 'react';
import Button from 'react-bootstrap/Button';
import { Navbar, Nav, NavbarBrand} from 'react-bootstrap';
import './menu.css'; 


const navbar= {'padding-top':30}
const button= {'background-color':'#fe6200', 'border-radius':20}
class Menu extends React.Component {
    render() {
        return (
            <Navbar  expand="lg"  className="navstyle" >
                <Navbar.Brand href="#home">
                <img
        src="../logo.png"
        width="90"
        height="50"
        className="d-inline-block align-top"
        
      /></Navbar.Brand>
      <NavbarBrand style={navbar}>MIREVA</NavbarBrand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                
                    <Nav className="mr-auto" style={navbar}>
                        <Nav.Link href="who.js">Products</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#blog">Blog</Nav.Link>
                        <Nav.Link href="#faq">FAQ</Nav.Link>
                        <Nav.Link href="#resources">Resources</Nav.Link>
       
       
       
                    </Nav>
                   
                    <Nav style={navbar}>
                        <Nav.Link href="#deets">Performance</Nav.Link>
                        <Nav.Link  href="#memes">
                            Login
      </Nav.Link>
      <Button type="submit" style={button}>Signup</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        );


    }

}
export default Menu