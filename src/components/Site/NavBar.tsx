import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import styled from 'styled-components';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../Auth/Login';
import Register from '../Auth/Register'
import AddBarReview from '../BarReviews/AddBarReview';

type AcceptedProps = {
    sessionToken: string,
    // updateToken: (newToken: string) => void,
    clearToken: () => void

}

export default class SiteBar extends Component <AcceptedProps> {
    constructor(props: AcceptedProps) {
        super(props)
    }
    render() {
        return (
    <div>
        <div>
            <Navbar>
                <NavbarBrand>
                    <img src="../../assets/APÉROO-logo" alt="Apéroo" />
                </NavbarBrand>
                <Nav class='ml-auto'>
                    <NavItem>
                        <Link to='/login'>Log In</Link>
                    </NavItem>
                    <NavItem>
                        <Link to='/register'>Register</Link>
                    </NavItem>
                    <NavItem>
                        <Link to='/addBarReview'>Review a Bar</Link>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
        <div>
            <Router>
                <Switch>
                    <Route exact path='/login'><Login updateToken={this.props.updateToken}/></Route>
                    <Route exact path='/register'><Register updateToken={this.props.updateToken}/></Route>
                    <Route exact path ='/addBarReview'><AddBarReview sessionToken={this.props.sessionToken}/></Route>
                </Switch>

            </Router>
        </div>
    </div>
        )
    }
}
