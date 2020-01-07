import React, { Component } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class AppNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {isOpen: false};
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
        isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
        <Navbar color="dark" dark expand="md">
            <NavbarBrand tag={Link} to="/"><h4>AZS Logistíca</h4></NavbarBrand>
            <NavbarToggler onClick={this.toggle}/>
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink tag={Link} to="/motorista">Motoristas</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/veiculo">Veículos</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/viagem">Viagens</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
        );
    }
}