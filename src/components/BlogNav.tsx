import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';

const BlogNav: React.FC = () => {
    return (
        <div>
            <Navbar style={{ backgroundColor: "#A3C1D4" }}>
                <img
                    src='https://axellverse.com/wp-content/uploads/2024/03/cropped-Favicon-1.png'
                    height='30'
                    alt=''
                    loading='lazy'
                />
                <Navbar.Brand href="#home" style={{ color: "white", marginLeft: "10px" }}>
                    Axellverse 
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-end">
                    <Nav>
                        <Nav.Link href="#Post1" style={{ color: "white" }}>
                            JavaScript
                        </Nav.Link>
                        <Nav.Link href="#Post2" style={{ color: "white" }}>
                            Data Structure
                        </Nav.Link>
                        <Nav.Link href="#Post3" style={{ color: "white" }}>
                            Algorithm
                        </Nav.Link>
                        <Nav.Link href="#Post4" style={{ color: "white" }}>
                            Computer Network
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl type="text" placeholder="Search" className="ml-auto" />
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default BlogNav;
